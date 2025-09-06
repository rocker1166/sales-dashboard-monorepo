-- Seed data for the sales dashboard

-- Insert sample metrics
INSERT INTO metric_summary (title, value, change, icon, color) VALUES
('Total Sales', '$1k', '+8% from yesterday', 'trending_up', '#FF6B9D'),
('Total Order', '300', '+5% from yesterday', 'shopping_cart', '#FF8A56'),
('Product Sold', '5', '+1.2% from yesterday', 'check_circle', '#10B981'),
('New Customers', '8', '0.5% from yesterday', 'people', '#8B5CF6');

-- Insert sample revenue data
INSERT INTO revenue_daily (day, online_sales, offline_sales, date) VALUES
('Monday', 15000.00, 12000.00, '2024-01-01'),
('Tuesday', 18000.00, 15000.00, '2024-01-02'),
('Wednesday', 12000.00, 8000.00, '2024-01-03'),
('Thursday', 16000.00, 10000.00, '2024-01-04'),
('Friday', 14000.00, 16000.00, '2024-01-05'),
('Saturday', 20000.00, 18000.00, '2024-01-06'),
('Sunday', 22000.00, 14000.00, '2024-01-07');

-- Insert sample customer satisfaction data
INSERT INTO satisfaction_monthly (month, last_month_score, this_month_score, year) VALUES
('Jan', 3.2, 3.8, 2024),
('Feb', 3.4, 4.0, 2024),
('Mar', 3.1, 3.9, 2024),
('Apr', 3.3, 4.2, 2024),
('May', 3.0, 4.1, 2024),
('Jun', 3.2, 4.3, 2024),
('Jul', 3.5, 4.5, 2024),
('Aug', 3.4, 4.4, 2024),
('Sep', 3.6, 4.6, 2024),
('Oct', 3.3, 4.3, 2024),
('Nov', 3.1, 4.1, 2024),
('Dec', 3.0, 4.0, 2024);

-- Insert sample visitor insights data
INSERT INTO visitor_insights (month, loyal_customers, new_customers, unique_customers, year) VALUES
('Jan', 200, 150, 180, 2024),
('Feb', 180, 200, 220, 2024),
('Mar', 220, 180, 200, 2024),
('Apr', 200, 220, 250, 2024),
('May', 250, 200, 280, 2024),
('Jun', 280, 250, 300, 2024),
('Jul', 320, 280, 350, 2024),
('Aug', 300, 320, 330, 2024),
('Sep', 350, 300, 380, 2024),
('Oct', 330, 350, 360, 2024),
('Nov', 280, 330, 320, 2024),
('Dec', 250, 280, 290, 2024);

-- Insert sample products data
INSERT INTO products (name, popularity, sales_percentage, rank) VALUES
('Home Decor Range', 45, 45, 1),
('Disney Princess Pink Bag 18', 29, 29, 2),
('Bathroom Essentials', 18, 18, 3),
('Apple Smartwatches', 25, 25, 4);
