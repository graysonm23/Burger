CREATE DATABASE
IF NOT EXISTS heroku_f1f44e32c5c60b7;
USE heroku_f1f44e32c5c60b7;

-- If the table already exists, remove it before trying to create the table again
DROP TABLE IF EXISTS burgers;

-- Create the burgers table
CREATE TABLE burgers
(
    id int NOT NULL
    AUTO_INCREMENT,
    burger_name varchar
    (255) NOT NULL,
    devoured BOOL DEFAULT false,
    PRIMARY KEY
    (id)
);
