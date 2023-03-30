DROP TABLE customers;
CREATE DATABASE sql_learn;
USE sql_learn;
CREATE TABLE Customers(
id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
CustomerName VARCHAR(255) NOT NULL  ,
ContactName VARCHAR(255),
Address VARCHAR (255),
City VARCHAR (100),
PostCode INT NOT NULL ,
Country VARCHAR(255)
);
INSERT INTO Customers(CustomerName,ContactName,Address,City,PostCode,Country)
VALUES("Hasan","Andrea","Obere Str. 57","Yambol",12209,Null);
INSERT INTO customers(CustomerName,ContactName,Address,City,PostCode,Country)
VALUES("Alfreds Futterkiste	","Maria Anders	","Obere Str. 57","Berlin",12209,"Germany"),
("Ana Trujillo Emparedados y helados","Ana Trujillo","Avda. de la Constitución 2222","México D.F.",05021,"Mexico"),
("	Antonio Moreno Taquería","Antonio Moreno","Mataderos 2312","México D.F.",05023,"Mexico"),
("Around the Horn","Thomas Hardy","120 Hanover Sq.","London",0223,"UK"),
("Berglunds snabbköp","Christina Berglund","Berguvsvägen 8","Luleå",1410,"Sweden")
;


SELECT DISTINCT CustomerName from Customers;
SELECT Country FROM Customers;
SELECT DISTINCT Country FROM Customers;
SELECT COUNT(DISTINCT Country) FROM Customers;
SELECT * FROM Customers WHERE Country = "Mexico";
SELECT * FROM Customers WHERE id = 1 ;
SELECT * FROM Customers WHERE Country = "Germany" AND City = "Berlin";
SELECT * FROM Customers WHERE Country = "Germany" OR PostCode = 5023;
SELECT * FROM Customers WHERE NOT  Country = "Germany" AND NOT Country ="Mexico";

SELECT * FROM Customers ORDER BY Country;
SELECT * FROM Customers ORDER BY Country DESC;
SELECT * FROM Customers ORDER BY Country ASC, CustomerName DESC;
SELECT * FROM Customers ORDER BY Country ASC, CustomerName ASC;

INSERT INTO Customers (CustomerName, ContactName, Address, City, PostCode, Country)
VALUES ('Cardinal', 'Tom B. Erichsen', 'Skagen 21', 'Stavanger', 4006, 'Norway');
INSERT INTO Customers  VALUES (8,"Maria","Ivancho","Bulevard Alexander Nevski","Sofia",9020,"Bulgaria");
/*
when you INSERT with no () you need to add index as well 
*/
INSERT INTO Customers (CustomerName, City,PostCode, Country)
VALUES ('Cardinal', 'Stavanger',6610, 'Norway');
SELECT * FROM Customers WHERE ContactName IS NOT NULL;
SELECT * FROM Customers WHERE ContactName IS NULL;

/* The SQL UPDATE Statement */
UPDATE Customers SET Address = "new Norway address", ContactName = "Valentin" WHERE id = 9;

/* The SQL DELETE Statement */
DELETE FROM Customers WHERE id = 9;
DELETE FROM Customers;  /*  DELETE all but table stay */

/* LIMIT*/
SELECT CustomerName FROM Customers
LIMIT 1;
SELECT * from Customers;
/*------------------------------------------------- FUNCTIONS---------------------------------------------------------------*/
CREATE TABLE Products(
ProductID INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
ProductName VARCHAR(255),
SupplierID INT,
CategoryID INT,
Unit VARCHAR(255),
Price INT 
);
INSERT INTO Products
VALUES(1,	"Chais",	1,	1,	"10 boxes x 20 bags",	18);


INSERT INTO Products
VALUES(2,	"Chang",	1,	1,	"24 - 12 oz bottles",	19),
(3,	"Aniseed Syrup",	1,	2,	"12 - 550 ml bottles",	10),
(4,	"Chef Anton's Cajun Seasoning",	2,	2,	"48 - 6 oz jars",	22),
(5,	"Chef Anton's Gumbo Mix",	2,	2,	"36 boxes",	21);

SELECT MIN(Price) AS SmallestPrice
FROM Products;

SELECT MAX(Price) AS LargestPrice
FROM Products;

SELECT AVG(Price) AS AvgPrice FROM Products;

SELECT SUM(Price)
FROM Products
WHERE  NOT Unit="36 boxes"; /* sum but exclude 1 with 36 boxes*/

SELECT COUNT(ProductID)
FROM Products;
SELECT * from Products;
/* LIKE*/
SELECT City FROM Customers WHERE Country LIKE "M%";
SELECT * FROM Customers WHERE Country LIKE "M%";

SELECT * FROM Customers WHERE Country LIKE "%y" AND Country LIKE "N%";
SELECT City,Country FROM Customers WHERE Country LIKE "%K" OR Country LIKE "M%";
SELECT * FROM Customers WHERE CustomerName LIKE 'a%';
SELECT * FROM Customers WHERE CustomerName LIKE '%a';

SELECT * FROM Customers
WHERE CustomerName LIKE '_r%';

SELECT * FROM Customers
WHERE City LIKE 'L_n_on';

/* not working idk why */
SELECT * FROM Customers
WHERE City LIKE '[SL]%';

SELECT * FROM Customers
WHERE City LIKE 'ber%';

/* IN */
SELECT * FROM Customers
WHERE Country IN ('Germany', 'France', 'UK');

SELECT Country, City
FROM Customers
WHERE Country IN ("UK","Germany");

/*BETWEEN*/
SELECT * FROM Products
WHERE Price BETWEEN 10 AND 21;

SELECT * FROM Products
WHERE Price NOT BETWEEN 10 AND 20;

SELECT * FROM Products
WHERE Price BETWEEN 10 AND 20
AND CategoryID NOT IN (2,3);

/*ALIASE   AS */
SELECT id AS CustomerID, CustomerName AS Customer
FROM Customers;

SELECT CustomerName AS Customer, ContactName AS "Contact Person"
FROM Customers;

/*SQL don't work in mySQL*/
SELECT CustomerName, Address + ', ' + PostCode + ' ' + City + ', ' + Country AS Address
FROM Customers;
/*SQL  work in mySQL*/
SELECT CustomerName, CONCAT(Address,', ',PostCode,', ',City,', ',Country) AS Address
FROM Customers;

SELECT p.ProductName, p.Unit, c.CustomerName
FROM Customers AS c, Products AS p
WHERE c.CustomerName='Around the Horn' AND c.id=p.ProductID;



SELECT * FROM Customers;
SELECT * FROM Products;



 


