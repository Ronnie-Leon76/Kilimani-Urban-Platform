-- Seed script for Kilimani Urban Intelligence Platform
-- Run this after setting up your database

-- Insert sample flood risk areas
INSERT INTO "FloodRiskArea" (id, name, coordinates, "riskLevel", "lastUpdated") VALUES
('flood_1', 'Yaya Centre Area', '{"type":"Polygon","coordinates":[[[36.8050,-1.2950],[36.8080,-1.2950],[36.8080,-1.2920],[36.8050,-1.2920],[36.8050,-1.2950]]]}', 'high', NOW()),
('flood_2', 'Kilimani Road Junction', '{"type":"Polygon","coordinates":[[[36.8000,-1.2980],[36.8030,-1.2980],[36.8030,-1.2950],[36.8000,-1.2950],[36.8000,-1.2980]]]}', 'medium', NOW()),
('flood_3', 'Argwings Kodhek Road', '{"type":"Polygon","coordinates":[[[36.7980,-1.2900],[36.8010,-1.2900],[36.8010,-1.2870],[36.7980,-1.2870],[36.7980,-1.2900]]]}', 'low', NOW());

-- Insert sample development plans
INSERT INTO "DevelopmentPlan" (id, title, description, coordinates, status, "createdAt") VALUES
('dev_1', 'Kilimani Shopping Complex', 'Proposed shopping complex near Yaya Centre', '{"type":"Point","coordinates":[36.8060,-1.2940]}', 'proposed', NOW()),
('dev_2', 'Water Treatment Plant', 'New water treatment facility for improved supply', '{"type":"Point","coordinates":[36.7990,-1.2890]}', 'approved', NOW()),
('dev_3', 'Green Park Initiative', 'Community park development project', '{"type":"Point","coordinates":[36.8020,-1.2970]}', 'under_construction', NOW());

-- Insert sample public consultations
INSERT INTO "PublicConsultation" (id, title, description, "startDate", "endDate", status, coordinates, "createdAt") VALUES
('consult_1', 'Kilimani Road Expansion', 'Community consultation on proposed road widening project', NOW() - INTERVAL '7 days', NOW() + INTERVAL '14 days', 'active', '{"type":"LineString","coordinates":[[36.8000,-1.3000],[36.8100,-1.2900]]}', NOW()),
('consult_2', 'Waste Management Strategy', 'Input needed on new waste collection and recycling program', NOW() - INTERVAL '3 days', NOW() + INTERVAL '10 days', 'active', '{"type":"Polygon","coordinates":[[[36.7900,-1.3100],[36.8200,-1.3100],[36.8200,-1.2800],[36.7900,-1.2800],[36.7900,-1.3100]]]}', NOW());

-- Insert sample water demand analysis
INSERT INTO "WaterDemandAnalysis" (id, area, coordinates, "populationDensity", "predictedDemand", "currentSupply", shortage, "analysisDate") VALUES
('water_1', 'Yaya Centre District', '{"type":"Polygon","coordinates":[[[36.8040,-1.2960],[36.8090,-1.2960],[36.8090,-1.2920],[36.8040,-1.2920],[36.8040,-1.2960]]]}', 2500.0, 125000.0, 100000.0, 25000.0, NOW()),
('water_2', 'Kilimani Residential Area', '{"type":"Polygon","coordinates":[[[36.7980,-1.2920],[36.8040,-1.2920],[36.8040,-1.2880],[36.7980,-1.2880],[36.7980,-1.2920]]]}', 1800.0, 90000.0, 85000.0, 5000.0, NOW()),
('water_3', 'Argwings Kodhek Corridor', '{"type":"Polygon","coordinates":[[[36.7960,-1.2900],[36.8020,-1.2900],[36.8020,-1.2860],[36.7960,-1.2860],[36.7960,-1.2900]]]}', 2200.0, 110000.0, 95000.0, 15000.0, NOW());
