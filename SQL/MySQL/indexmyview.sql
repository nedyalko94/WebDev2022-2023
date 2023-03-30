
-- create index 

CREATE INDEX indexID
ON Orders2 (OrderNumber);

CREATE UNIQUE INDEX index_name
ON Orders2 (OrderNumber, OrderDate );

ALTER TABLE Orders2
DROP INDEX indexID;


-- create views from the meny in left 
/*
CREATE VIEW view_name AS
SELECT column1, column2, ...
FROM table_name
WHERE condition;
*/
SELECT * FROM myview;


SELECT * from Orders2;

SELECT* FROM Orders;

SELECT *  FROM Persons2;

SELECT * FROM Persons;
myview