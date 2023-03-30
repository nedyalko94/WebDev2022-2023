
/*the SELECT INTO statement copies data from one table into a new table.*/
DROP DATABASE customersgermany;

CREATE TABLE CustomersGermany(
id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
CustomerName VARCHAR(255) NOT NULL  ,
ContactName VARCHAR(255),
Address VARCHAR (255),
City VARCHAR (100),
PostCode INT NOT NULL ,
Country VARCHAR(255)
);

/*SELECT INTO don't work need some work*/
SELECT * INTO CustomersGermany
FROM Customers
where Country = "Germany";

SELECT * INTO newTable
FROM Customers
WHERE 1 = 0;

SELECT * FROM Customers
    INTO OUTFILE 'C:\Users\Mushmuroka\Desktop\MySQL\newCustomers.sql';
    
    
/*The INSERT INTO SELECT statement copies data from one table and inserts it into another table.*/
INSERT INTO customersgermany
SELECT * FROM customers
WHERE Country = "Germany";

/*Case */
SELECT CustomerName, City, Country
FROM Customers
ORDER BY
(CASE
    WHEN City IS NULL THEN Country
    ELSE City
END);

SELECT ProductName, Price,
CASE
    WHEN Price > 15 THEN 'The price is greater than 15'
    WHEN Price < 15 THEN 'The price is above 15'
    ELSE 'else price'
END AS PriceText
FROM products;

/*SQL IFNULL(), ISNULL(), COALESCE(), and NVL() Functions */
CREATE TABLE Porder(
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
ProductName VARCHAR (255),
UnitPrice FLOAT ,
UnitsInStock INT ,
UnitsOnOrder INT
);
INSERT INTO Porder
VALUES(1,	"Jarlsberg",	10.45,	16,	15),
(2,"	Mascarpone",	32.56,	23,NULL	),
(3,"	Gorgonzola",	15.67,	9,	20);

SELECT ProductName, UnitPrice * (UnitsInStock + UnitsOnOrder) as Result
FROM Porder;

SELECT ProductName, UnitPrice * (UnitsInStock + IFNULL(UnitsOnOrder, 0))
FROM Porder;

SELECT ProductName, UnitPrice * (UnitsInStock + COALESCE(UnitsOnOrder, 0))
FROM Porder;

SELECT ProductName, UnitPrice * (UnitsInStock + COALESCE(UnitsOnOrder, 0))
FROM Porder;

/*STORED PROCEDURES go to left menu and create one  https://www.sqlshack.com/learn-mysql-the-basics-of-mysql-stored-procedures/#:~:text=To%20create%20the%20MySQL%20Stored,the%20procedure%20under%20stored%20procedures.*/
CALL GO;


-- this is single line comment ;
/*multi 
line 
comment
*/


SELECT * FROM Porder;
SELECT * FROM customersgermany;
SELECT * FROM Products;
SELECT * FROM Customers;