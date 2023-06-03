CREATE TABLE medicinetype(
    id INT  AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255)
);
CREATE TABLE stock(
    id INT  AUTO_INCREMENT PRIMARY KEY,
    medicine_id INT,
    pharmacy_id INT,
    quantity BIGINT
);
CREATE TABLE pharmacies(
    id INT  AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    address VARCHAR(255),
    location VARCHAR(255),
    phone VARCHAR(255),
    email VARCHAR(255),
    region_id INT,
    district_id INT
);
CREATE TABLE medicines(
    id INT  AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    manufacturer VARCHAR(255),
    medicine_type_id INT,
    price DOUBLE(8, 2),
    expiry_date DATE,
    info TEXT
);
CREATE TABLE region(
    id INT  AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255)
);
CREATE TABLE district(
    id INT  AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    region_id INT
);
ALTER TABLE
    Pharmacies ADD CONSTRAINT pharmacies_district_id_foreign FOREIGN KEY(district_id) REFERENCES District(id);
ALTER TABLE
    Stock ADD CONSTRAINT stock_medicine_id_foreign FOREIGN KEY(medicine_id) REFERENCES Medicines(id);
ALTER TABLE
    Medicines ADD CONSTRAINT medicines_medicine_type_id_foreign FOREIGN KEY(medicine_type_id) REFERENCES MedicineType(id);
ALTER TABLE
    District ADD CONSTRAINT district_region_id_foreign FOREIGN KEY(region_id) REFERENCES Region(id);
ALTER TABLE
    Stock ADD CONSTRAINT stock_pharmacy_id_foreign FOREIGN KEY(pharmacy_id) REFERENCES Pharmacies(id);
ALTER TABLE
    Pharmacies ADD CONSTRAINT pharmacies_region_id_foreign FOREIGN KEY(region_id) REFERENCES Region(id);