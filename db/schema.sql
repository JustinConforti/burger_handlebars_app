DROP DATABASE IF EXISTS burger_db; -- Dropping previous database --
CREATE DATABASE burger_db; -- creating database burger_db--
USE burger_db;

CREATE TABLE burgers (
id INTEGER(11) AUTO_INCREMENT,
burger_name VARCHAR(30) NOT NULL,
devoured BOOLEAN NOT NULL,
PRIMARY KEY (id)
);

INSERT INTO burgers (burger_name, devoured)
VALUES ("Cheese Burger", FALSE), ("Double Cheese Burger", FALSE), ("Extra deep fried pickle burger", FALSE)
