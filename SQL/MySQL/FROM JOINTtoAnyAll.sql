CREATE TABLE Shippers(
id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
name VARCHAR(255));
DROP TABLE Shippers;

INSERT INTO Shippers(name)
VALUES("Cveti"),("Denis"),("Alex");

INSERT INTO Shippers 
VALUES(4,"Dragan"),(5,"Petkan"),(6,"Sirma");


SELECT * FROM Shippers;

/*SQL Joins*/
/*SQL INNER Joins*/
SELECT c.id , c.CustomerName , c.City,Products.ProductName  
FROM Customers AS c 
INNER JOIN Products ON c.id = Products.ProductID;
 
 SELECT Customers.CustomerName , Products.ProductName,Products.Unit, Products.Price 
 FROM Customers
 INNER JOIN Products
 ON Customers.id = Products.ProductID;
 
 SELECT *  
 FROM Customers 
 INNER JOIN Products 
 ON Customers.id = Products.ProductID;
 
 /*3 table*/
 SELECT Customers.CustomerName , Products.ProductName,Products.Unit, Products.Price ,Shippers.Name
 FROM((Customers
 INNER JOIN Products ON Customers.id = Products.ProductID)
 INNER JOIN Shippers ON Customers.id = Shippers.id);
 
 
 
 /*SQL LEFT Joins*/
  SELECT Customers.CustomerName , Products.ProductName,Products.Unit, Products.Price 
 FROM Customers
 LEFT JOIN Products
 ON Customers.id = Products.ProductID;
 
 /*SQL RIGHT Joins*/
 SELECT Customers.CustomerName , Products.ProductName,Products.Unit, Products.Price 
 FROM Customers
 RIGHT JOIN Products
 ON Customers.id = Products.ProductID;
 
 /*FULL OUTER JOIN   // FULL OUTER JOIN // don't work no full joint in mysql  instead use union*/
 /*
SELECT *
 FROM Customers
  FULL OUTER JOIN Products
 ON Customers.id = Products.ProductID;
 */
 
 
SELECT * FROM Customers
LEFT JOIN Products ON Customers.id =Products.ProductID
UNION ALL
SELECT * FROM Customers
RIGHT JOIN Products ON Customers.id = Products.ProductID
WHERE Customers.id IS NULL;


/*SELF JOIN // they are not unique maybe s something wrong with <>  */
SELECT  A.CustomerName AS CustomerName1, B.CustomerName AS CustomerName2, A.City
FROM Customers A, Customers B
 WHERE  A.id <> B.id
AND A.City = B.City
ORDER BY A.City;

SELECT A.CustomerName AS Customer1, B.CustomerName as Customer2 ,A.Country
FROM Customers A, Customers B
Where  A.id <> B.id
AND A.Country = B.Country;

/* The SQL UNION Operator  same number of column and similar data type return only (only distinct values)*/
/*column join ... maybe */
SELECT CustomerName 
AS name FROM Customers
UNION
SELECT name FROM Shippers
ORDER BY name;

SELECT CustomerName  
FROM Customers
UNION
SELECT name FROM Shippers;


/*GROUP BY */
SELECT COUNT(id), Country
FROM Customers
GROUP BY Country
ORDER BY COUNT(id) DESC;

SELECT COUNT(CategoryID), ProductName
from Products 
GROUP BY ProductName
ORDER BY COUNT(CategoryID) desc;

/*HAVING  // The HAVING clause was added to SQL because the WHERE keyword cannot be used with aggregate functions. */

SELECT COUNT(id), Country
FROM Customers
GROUP BY Country
HAVING COUNT(id) > 1;


SELECT COUNT(ProductID) ,CategoryID
FROM Products
GROUP BY CategoryID
having  COUNT(CategoryID)  > 2;

/*EXIST*/
SELECT ProductName
FROM products
WHERE EXISTS
(SELECT Price FROM products WHERE price < 20);

/* ANY / ALL // The ANY and ALL operators allow you to perform a comparison between a single column value and a range of other values.*/
/*Note: The operator must be a standard comparison operator (=, <>, !=, >, >=, <, or <=).*/

SELECT ProductName 
FROM Products 
WHERE Price > ANY 
(SELECT Price 
FROM Products 
WHERE price >0) ;


/*ALL */
SELECT ProductName,Price
FROM Products
WHERE ProductID = ALL
  (SELECT Price
  FROM Products
  WHERE Price = 9);



SELECT * FROM Products;
SELECT * FROM Customers;