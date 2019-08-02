
USE loatiqul9yngd55s;

CREATE TABLE burgers (
id INTEGER(11) AUTO_INCREMENT,
burger_name VARCHAR(30) NULL,
devoured BOOLEAN NOT NULL DEFAULT 0,
PRIMARY KEY (id)
);

INSERT INTO burgers (burger_name, devoured)
VALUES ("Cheese Burger", FALSE), ("Double Cheese Burger", FALSE), ("Extra deep fried pickle burger", FALSE);

DROP TABLE burgers;
SELECT * FROM burgers;