DROP DATABASE IF EXISTS userInfo_db;
CREATE database userInfo_db;

USE userInfo_db;

CREATE TABLE userInfo
(
    id int NOT NULL
    AUTO_INCREMENT,
    userName varchar
    (255) NOT NULL,
    DOB DATE NOT NULL,
    createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    password VARCHAR
    (255) NOT NULL,
    favorite VARCHAR
    (255),
    PRIMARY KEY
    (id)
    );


