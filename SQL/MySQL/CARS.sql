USE cars;
drop table mercedes;
CREATE TABLE mercedes(
id INT NOT NULL AUTO_INCREMENT,
model varchar(100),
year_of_production INT,
price INT,
car_description VARCHAR(300),
PRIMARY KEY (id)

);

insert into mercedes(model,year_of_production,price,car_description)
values("c200",2000,25000,"this is realy nice car")
;

select * from mercedes;

SELECT 
    model AS Model, price AS Price
FROM
    mercedes;

DROP TABLE  eggs ;

CREATE TABLE eggs(
id INT NOT NULL AUTO_INCREMENT,
oliveoil VARCHAR(255),
sel INT,
PRIMARY KEY (id));

SELECT *  FROM eggs AS Omlete;


