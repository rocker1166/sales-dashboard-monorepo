-- Updated seed data to match new comprehensive schema
-- Insert sample users
INSERT INTO users (id, email, name, avatar_url, role) VALUES
  ('550e8400-e29b-41d4-a716-446655440001', 'john.doe@example.com', 'John Doe', 'https://i.pravatar.cc/150?img=1', 'admin'),
  ('550e8400-e29b-41d4-a716-446655440002', 'jane.smith@example.com', 'Jane Smith', 'https://i.pravatar.cc/150?img=2', 'user'),
  ('550e8400-e29b-41d4-a716-446655440003', 'mike.johnson@example.com', 'Mike Johnson', 'https://i.pravatar.cc/150?img=3', 'user'),
  ('550e8400-e29b-41d4-a716-446655440004', 'sarah.wilson@example.com', 'Sarah Wilson', 'https://i.pravatar.cc/150?img=4', 'user'),
  ('550e8400-e29b-41d4-a716-446655440005', 'david.brown@example.com', 'David Brown', 'https://i.pravatar.cc/150?img=5', 'user');

-- Insert sample products
INSERT INTO products (name, price, category, popularity_score, sales_count) VALUES
  ('Home Decor Range', 299.99, 'Home & Garden', 85, 156),
  ('Disney Princess Pink Bag 18', 49.99, 'Fashion', 72, 89),
  ('Bathroom Essentials', 79.99, 'Home & Garden', 64, 45),
  ('Apple Smartwatches', 399.99, 'Electronics', 91, 234);

-- Insert sample sales data
INSERT INTO sales (amount, product_name, customer_id, sale_date) VALUES
  (299.99, 'Home Decor Range', '550e8400-e29b-41d4-a716-446655440002', CURRENT_DATE),
  (49.99, 'Disney Princess Pink Bag 18', '550e8400-e29b-41d4-a716-446655440003', CURRENT_DATE),
  (79.99, 'Bathroom Essentials', '550e8400-e29b-41d4-a716-446655440004', CURRENT_DATE - INTERVAL '1 day'),
  (399.99, 'Apple Smartwatches', '550e8400-e29b-41d4-a716-446655440005', CURRENT_DATE - INTERVAL '2 days'),
  (299.99, 'Home Decor Range', '550e8400-e29b-41d4-a716-446655440002', CURRENT_DATE - INTERVAL '3 days');

-- Insert sample orders
INSERT INTO orders (customer_id, total_amount, status, order_date) VALUES
  ('550e8400-e29b-41d4-a716-446655440002', 299.99, 'completed', CURRENT_DATE),
  ('550e8400-e29b-41d4-a716-446655440003', 49.99, 'completed', CURRENT_DATE),
  ('550e8400-e29b-41d4-a716-446655440004', 79.99, 'pending', CURRENT_DATE - INTERVAL '1 day'),
  ('550e8400-e29b-41d4-a716-446655440005', 399.99, 'completed', CURRENT_DATE - INTERVAL '2 days');

-- Insert visitor analytics data
INSERT INTO visitor_analytics (date, loyal_customers, new_customers, unique_customers) VALUES
  (CURRENT_DATE - INTERVAL '11 months', 180, 120, 80),
  (CURRENT_DATE - INTERVAL '10 months', 200, 140, 90),
  (CURRENT_DATE - INTERVAL '9 months', 160, 100, 70),
  (CURRENT_DATE - INTERVAL '8 months', 220, 160, 100),
  (CURRENT_DATE - INTERVAL '7 months', 240, 180, 110),
  (CURRENT_DATE - INTERVAL '6 months', 280, 200, 130),
  (CURRENT_DATE - INTERVAL '5 months', 320, 240, 150),
  (CURRENT_DATE - INTERVAL '4 months', 300, 220, 140),
  (CURRENT_DATE - INTERVAL '3 months', 350, 260, 170),
  (CURRENT_DATE - INTERVAL '2 months', 380, 280, 190),
  (CURRENT_DATE - INTERVAL '1 month', 400, 300, 200),
  (CURRENT_DATE, 420, 320, 210);

-- Insert revenue analytics data
INSERT INTO revenue_analytics (date, day_of_week, online_sales, offline_sales) VALUES
  (CURRENT_DATE - INTERVAL '6 days', 'Monday', 12000, 8000),
  (CURRENT_DATE - INTERVAL '5 days', 'Tuesday', 15000, 10000),
  (CURRENT_DATE - INTERVAL '4 days', 'Wednesday', 8000, 6000),
  (CURRENT_DATE - INTERVAL '3 days', 'Thursday', 18000, 12000),
  (CURRENT_DATE - INTERVAL '2 days', 'Friday', 14000, 9000),
  (CURRENT_DATE - INTERVAL '1 day', 'Saturday', 22000, 15000),
  (CURRENT_DATE, 'Sunday', 20000, 13000);

-- Insert customer satisfaction data
INSERT INTO customer_satisfaction (customer_id, rating, feedback, survey_date) VALUES
  ('550e8400-e29b-41d4-a716-446655440002', 5, 'Excellent service!', CURRENT_DATE - INTERVAL '30 days'),
  ('550e8400-e29b-41d4-a716-446655440003', 4, 'Very good experience', CURRENT_DATE - INTERVAL '25 days'),
  ('550e8400-e29b-41d4-a716-446655440004', 5, 'Outstanding quality', CURRENT_DATE - INTERVAL '20 days'),
  ('550e8400-e29b-41d4-a716-446655440005', 4, 'Great products', CURRENT_DATE - INTERVAL '15 days');

-- Insert sales targets data
INSERT INTO sales_targets (month, target_sales, reality_sales) VALUES
  ('Jan', 10000, 8823),
  ('Feb', 12000, 9500),
  ('Mar', 11000, 10200),
  ('Apr', 13000, 11800),
  ('May', 14000, 12500),
  ('Jun', 15000, 13200),
  ('Jul', 16000, 14100);

-- Insert country sales data
INSERT INTO country_sales (country_code, country_name, sales_amount, percentage) VALUES
  ('USA', 'United States', 450000, 35.5),
  ('CAN', 'Canada', 280000, 22.1),
  ('GBR', 'United Kingdom', 320000, 25.3),
  ('AUS', 'Australia', 180000, 14.2),
  ('DEU', 'Germany', 95000, 7.5);

-- Insert service analytics data
INSERT INTO service_analytics (month, volume, services) VALUES
  ('Jan', 1195, 635),
  ('Feb', 1150, 580),
  ('Mar', 1180, 610),
  ('Apr', 1220, 650),
  ('May', 1160, 590),
  ('Jun', 1200, 620),
  ('Jul', 1250, 670);
