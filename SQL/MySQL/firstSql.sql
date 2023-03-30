SHOW DATABASES;
CREATE DATABASE test;
DROP DATABASE test;
CREATE DATABASE record_company;
USE record_company;
CREATE TABLE test(
test_column INT 
);
ALTER TABLE test
ADD another_column VARCHAR(255);
DROP TABLE test;
CREATE TABLE bands(
id INT NOT NULL AUTO_INCREMENT,
name VARCHAR(255)NOT NULL,
PRIMARY KEY (id)
);

CREATE TABLE albums (
id INT NOT NULL AUTO_INCREMENT,
name VARCHAR(255) NOT NULL,
release_year INT ,
band_id INT NOT NULL ,
PRIMARY KEY (id),
FOREIGN KEY (band_id) REFERENCES bands(id)
);






INSERT INTO bands (name)
VALUES('iron maiden');

INSERT INTO bands (name)
VALUES ('deuce'),('avenged sevenfold'),('ankor');

SELECT * FROM bands;

SELECT * FROM bands limit 2 ;
SELECT name FROM bands ;
SELECT id as "ID", name as "Band Name " FROM bands;

SELECT * FROM bands  ORDER BY name;
SELECT * FROM bands ORDER BY name DESC;
SELECT * FROM bands ORDER BY name ASC;

INSERT INTO albums (name,release_year,band_id)
VALUES('The number of the Beast',1995,1),
		("power slave",1984,1),
        ('nightmare',2018,2),
        ('nightmare',2010,3),
        ('test album',NULL,3)
;

SELECT * FROM albums;
SELECT * FROM bands;
SELECT name FROM albums;
SELECT DISTINCT name FROM albums;

UPDATE albums
SET release_year = 1982 WHERE id =1;


SELECT * FROM albums WHERE release_year < 2000;  
SELECT * FROM albums WHERE name LIKE '%er%';
SELECT * FROM albums WHERE name LIKE '%er%' OR band_id = 2;

SELECT * FROM albums WHERE release_year = 1984 AND band_id = 1 ;
SELECT * FROM albums WHERE release_year BETWEEN 2000 AND 2018;
SELECT * FROM albums WHERE release_year IS NULL;

DELETE FROM albums WHERE id = 5 ;
DELETE FROM bands WHERE id = 1;

SELECT * FROM bands JOIN albums ON bands.id  = albums.band_id;
SELECT * FROM bands INNER JOIN albums ON bands.id  = albums.band_id;
SELECT * FROM bands LEFT JOIN albums ON bands.id  = albums.band_id;
SELECT * FROM bands RIGHT JOIN albums ON bands.id  = albums.band_id;

SELECT AVG(release_year) FROM albums;

SELECT SUM(release_year) FROM albums;

SELECT band_id , COUNT(band_id) FROM albums
GROUP BY band_id;

SELECT b.name AS band_name, COUNT(a.id) AS num_albums
FROM bands AS b 
LEFT JOIN albums AS a  ON b.id = a.band_id
WHERE b.name = "deuce"
GROUP BY b.id
HAVING num_albums = 1;















