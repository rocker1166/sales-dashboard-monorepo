-- Updated schema to match the comprehensive dashboard requirements
-- Create comprehensive tables for the sales dashboard

-- Users table for authentication and profiles
CREATE TABLE IF NOT EXISTS users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email VARCHAR(255) UNIQUE NOT NULL,
    name VARCHAR(255) NOT NULL,
    avatar_url TEXT,
    role VARCHAR(50) DEFAULT 'user',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Products table
CREATE TABLE IF NOT EXISTS products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    category VARCHAR(100),
    popularity_score INTEGER DEFAULT 0,
    sales_count INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Sales transactions table
CREATE TABLE IF NOT EXISTS sales (
    id SERIAL PRIMARY KEY,
    amount DECIMAL(10,2) NOT NULL,
    product_name VARCHAR(255),
    customer_id UUID REFERENCES users(id),
    sale_date DATE DEFAULT CURRENT_DATE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Orders table
CREATE TABLE IF NOT EXISTS orders (
    id SERIAL PRIMARY KEY,
    customer_id UUID REFERENCES users(id),
    total_amount DECIMAL(10,2) NOT NULL,
    status VARCHAR(50) DEFAULT 'pending',
    order_date DATE DEFAULT CURRENT_DATE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Visitor analytics table
CREATE TABLE IF NOT EXISTS visitor_analytics (
    id SERIAL PRIMARY KEY,
    date DATE NOT NULL,
    loyal_customers INTEGER DEFAULT 0,
    new_customers INTEGER DEFAULT 0,
    unique_customers INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Revenue analytics table
CREATE TABLE IF NOT EXISTS revenue_analytics (
    id SERIAL PRIMARY KEY,
    date DATE NOT NULL,
    day_of_week VARCHAR(20) NOT NULL,
    online_sales DECIMAL(10,2) DEFAULT 0,
    offline_sales DECIMAL(10,2) DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Customer satisfaction table
CREATE TABLE IF NOT EXISTS customer_satisfaction (
    id SERIAL PRIMARY KEY,
    customer_id UUID REFERENCES users(id),
    rating INTEGER CHECK (rating >= 1 AND rating <= 5),
    feedback TEXT,
    survey_date DATE DEFAULT CURRENT_DATE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Sales targets table
CREATE TABLE IF NOT EXISTS sales_targets (
    id SERIAL PRIMARY KEY,
    month VARCHAR(20) NOT NULL,
    target_sales DECIMAL(12,2) NOT NULL,
    reality_sales DECIMAL(12,2) NOT NULL,
    year INTEGER DEFAULT EXTRACT(YEAR FROM CURRENT_DATE),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Country sales mapping table
CREATE TABLE IF NOT EXISTS country_sales (
    id SERIAL PRIMARY KEY,
    country_code VARCHAR(3) NOT NULL,
    country_name VARCHAR(100) NOT NULL,
    sales_amount DECIMAL(12,2) NOT NULL,
    percentage DECIMAL(5,2) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Service analytics table
CREATE TABLE IF NOT EXISTS service_analytics (
    id SERIAL PRIMARY KEY,
    month VARCHAR(20) NOT NULL,
    volume INTEGER DEFAULT 0,
    services INTEGER DEFAULT 0,
    year INTEGER DEFAULT EXTRACT(YEAR FROM CURRENT_DATE),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_sales_date ON sales(sale_date);
CREATE INDEX IF NOT EXISTS idx_sales_customer ON sales(customer_id);
CREATE INDEX IF NOT EXISTS idx_orders_date ON orders(order_date);
CREATE INDEX IF NOT EXISTS idx_orders_customer ON orders(customer_id);
CREATE INDEX IF NOT EXISTS idx_visitor_analytics_date ON visitor_analytics(date);
CREATE INDEX IF NOT EXISTS idx_revenue_analytics_date ON revenue_analytics(date);
CREATE INDEX IF NOT EXISTS idx_customer_satisfaction_date ON customer_satisfaction(survey_date);
CREATE INDEX IF NOT EXISTS idx_sales_targets_year_month ON sales_targets(year, month);
CREATE INDEX IF NOT EXISTS idx_service_analytics_year_month ON service_analytics(year, month);
CREATE INDEX IF NOT EXISTS idx_products_popularity ON products(popularity_score DESC);

-- Enable Row Level Security (RLS)
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE sales ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE visitor_analytics ENABLE ROW LEVEL SECURITY;
ALTER TABLE revenue_analytics ENABLE ROW LEVEL SECURITY;
ALTER TABLE customer_satisfaction ENABLE ROW LEVEL SECURITY;
ALTER TABLE sales_targets ENABLE ROW LEVEL SECURITY;
ALTER TABLE country_sales ENABLE ROW LEVEL SECURITY;
ALTER TABLE service_analytics ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access (adjust for production security)
CREATE POLICY "Allow public read access on users" ON users FOR SELECT USING (true);
CREATE POLICY "Allow public read access on products" ON products FOR SELECT USING (true);
CREATE POLICY "Allow public read access on sales" ON sales FOR SELECT USING (true);
CREATE POLICY "Allow public read access on orders" ON orders FOR SELECT USING (true);
CREATE POLICY "Allow public read access on visitor_analytics" ON visitor_analytics FOR SELECT USING (true);
CREATE POLICY "Allow public read access on revenue_analytics" ON revenue_analytics FOR SELECT USING (true);
CREATE POLICY "Allow public read access on customer_satisfaction" ON customer_satisfaction FOR SELECT USING (true);
CREATE POLICY "Allow public read access on sales_targets" ON sales_targets FOR SELECT USING (true);
CREATE POLICY "Allow public read access on country_sales" ON country_sales FOR SELECT USING (true);
CREATE POLICY "Allow public read access on service_analytics" ON service_analytics FOR SELECT USING (true);

-- Create functions for dashboard metrics
CREATE OR REPLACE FUNCTION get_today_sales_summary()
RETURNS TABLE (
    total_sales DECIMAL,
    total_orders INTEGER,
    products_sold INTEGER,
    new_customers INTEGER
) AS $$
BEGIN
    RETURN QUERY
    SELECT 
        COALESCE(SUM(s.amount), 0) as total_sales,
        COALESCE(COUNT(DISTINCT o.id), 0)::INTEGER as total_orders,
        COALESCE(COUNT(DISTINCT s.id), 0)::INTEGER as products_sold,
        COALESCE(COUNT(DISTINCT CASE WHEN u.created_at::DATE = CURRENT_DATE THEN u.id END), 0)::INTEGER as new_customers
    FROM sales s
    FULL OUTER JOIN orders o ON o.order_date = CURRENT_DATE
    FULL OUTER JOIN users u ON u.created_at::DATE = CURRENT_DATE
    WHERE s.sale_date = CURRENT_DATE OR s.sale_date IS NULL;
END;
$$ LANGUAGE plpgsql;
