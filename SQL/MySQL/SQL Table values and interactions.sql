
CREATE DATABASE test;
SHOW DATABASES;
DROP DATABASE test;
/*
BACKUP DATABASE test
TO DISK = "E:\Programing\";
//
BACKUP DATABASE databasename
TO DISK = 'filepath'
WITH DIFFERENTIAL;

don't work 
go to Administrator panel >Data Export
*/
USE test;
CREATE TABLE Persons (
    PersonID int,
    LastName varchar(255),
    FirstName varchar(255),
    Address varchar(255),
    City varchar(255)
);
INSERT INTO Persons
values(1,"ivanov","Ivan","some address","some city",'asd');

DROP TABLE Persons;

TRUNCATE TABLE Persons; -- delete all  info from table but not the table itself;

ALTER TABLE Persons
ADD Email varchar(255); -- add value to the column

ALTER TABLE Persons 
DROP Email;

ALTER TABLE Persons 
ADD email VARCHAR(255);

ALTER TABLE Persons 
RENAME COLUMN email TO Email;
/*MS Access: alter data type
ALTER TABLE Persons
ALTER COLUMN Email date;
*/
-- old way 
ALTER TABLE Persons
MODIFY COLUMN Email DATE;
-- new way
ALTER TABLE Persons
MODIFY  Email INT;

-- add;
ALTER TABLE Persons
ADD DateOfBirth DATE;
-- modify
ALTER TABLE Persons
MODIFY  DateOfBirth YEAR;
-- drop 
ALTER TABLE Persons 
DROP COLUMN DateOfBirth;

-- SQL Create Constraints

ALTER TABLE Persons 
ADD id INT ;

-- modify the constraints 
ALTER TABLE Persons 
MODIFY id INT NOT NULL AUTO_INCREMENT PRIMARY KEY;

-- rename
ALTER TABLE Persons 
RENAME COLUMN id to PersonI;

-- drop column
ALTER TABLE Persons 
DROP COLUMN PersonI;

-- unique still accept lastName that aren't unique
ALTER TABLE Persons 
MODIFY LastName VARCHAR(255) UNIQUE ;

-- default  
ALTER TABLE Persons 
MODIFY Email VARCHAR(255)  DEFAULT "no Email was given" ;

-- for some reason querry work but   still accept LastName that aren't unique
ALTER TABLE Persons
ADD CONSTRAINT UC_Person UNIQUE (PersonID,LastName);

ALTER TABLE Persons
DROP INDEX UC_Person;
-- or 
ALTER TABLE Persons
DROP CONSTRAINT UC_Person;

-- drop default  some problem remove default but when i want to insert another value error that doesent' have default
ALTER TABLE Persons 
ALTER Email DROP DEFAULT;

ALTER TABLE Persons 
ALTER Email   DROP DEFAULT;

-- not null primary key auto_increment
ALTER TABLE Persons
MODIFY PersonID INT AUTO_INCREMENT NOT NULL PRIMARY KEY;


INSERT INTO Persons (LastName,FirstName, Address,City)
values("Alexandrov","Petur","some address","some city");


-- primary key
CREATE TABLE Persons2 (
    ID int NOT NULL,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255),
    Age int,
    CONSTRAINT PK_Person PRIMARY KEY (ID,LastName)
);

-- foreignt key

CREATE TABLE Orders (
    OrderID int NOT NULL AUTO_INCREMENT,
    OrderNumber int NOT NULL,
    PersonID int,
    PRIMARY KEY (OrderID),
    FOREIGN KEY (PersonID) REFERENCES Persons(PersonID)
);


INSERT INTO Orders
VALUES(2,5,1);

-- check 
ALTER TABLE Persons2
ADD CHECK(Age >= 18);



INSERT INTO Persons2 
VALUES(1,"Ivanchev","Alexandrov",19);

ALTER TABLE Persons2
ADD CONSTRAINT CHK_PersonAge CHECK (Age>=18 AND LastName='Sandnes');

UPDATE Persons2
SET LastName = "Sandnes" where id = 1;

ALTER TABLE Persons2
DROP CHECK CHK_PersonAge;

SELECT CURRENT_TIMESTAMP;

-- getdate() don't work
 
 -- current_timestamp  format need to be datetime
 -- current_time  format time
 -- current_date format date
CREATE TABLE Orders2 (
    ID int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    OrderNumber int NOT NULL,
    OrderDate DATETIME DEFAULT(current_timestamp)
);


DROP TABLE Orders2;

ALTER TABLE Orders2 
MODIFY ID INT NOT NULL AUTO_INCREMENT PRIMARY KEY;

INSERT INTO Orders2 (OrderNumber)
VALUES (10);



SELECT * from Orders2;

SELECT* FROM Orders;

SELECT *  FROM Persons2;

SELECT * FROM Persons;

