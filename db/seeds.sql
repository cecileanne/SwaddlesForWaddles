-- DROP DATABASE IF EXISTS userAuth;

-- CREATE DATABASE userAuth;

USE userAuth;

DROP TABLE IF EXISTS user;

CREATE TABLE user (
  id INT NOT NULL AUTO_INCREMENT,
  firstName VARCHAR(45) NOT NULL,
  lastName VARCHAR(45) NOT NULL,
  email VARCHAR(45) NOT NULL,
  user_password VARCHAR(45) NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO user (firstName, lastName, email, user_password)
VALUES ("Bruce", "Wayne", "gothambat@test.com", "12345");

INSERT INTO user (firstName, lastName, email, user_password)
VALUES ("Oswald", "Cobblepot", "gothampenguin@test.com", "54321");
