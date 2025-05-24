CREATE DATABASE travel_db;

CREATE TABLE travel_db.book_form (
    id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name varchar(100) NOT NULL DEFAULT '',
    email varchar(100) NOT NULL DEFAULT '',
    phone bigint(10) NOT NULL DEFAULT 0,
    address varchar(255),
    location varchar(255), 
    guests int NOT NULL DEFAULT 0,
    arrivals date NOT NULL,
    leaving date NOT NULL
) ENGINE=InnoDB;
