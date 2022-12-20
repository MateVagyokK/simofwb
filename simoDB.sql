CREATE DATABASE simoDb;

CREATE TABLE works (
    workId int NOT NULL AUTO_INCREMENT, /* Identifier of element, unique, KEY */
    name varchar(255),                  /* Name of element*/
    description varchar(255),           /* Description of element*/
    pics varchar(255),                  /* List of picture references, separated by ; character*/
    PRIMARY KEY (workId)
);

/* Sample inserts to presentation*/
INSERT INTO works (workId, name, description, pics)
VALUES (null, 'engine 1', 'very good one', 'https://www.jawaparts.com/fotky6872/fotos/6872_5552__vyr_55504785a--1000.jpg;https://cdn.pixabay.com/photo/2019/03/11/23/36/simson-s51-4049765_960_720.jpg');INSERT INTO works (workId, name, description, pics)
VALUES (null, 'engine 2', 'very good one', 'https://www.jawaparts.com/fotky6872/fotos/6872_5552__vyr_55504785a--1000.jpg;https://cdn.pixabay.com/photo/2019/03/11/23/36/simson-s51-4049765_960_720.jpg');INSERT INTO works (workId, name, description, pics)
VALUES (null, 'engine 3', 'very good one', 'https://www.jawaparts.com/fotky6872/fotos/6872_5552__vyr_55504785a--1000.jpg;https://cdn.pixabay.com/photo/2019/03/11/23/36/simson-s51-4049765_960_720.jpg');INSERT INTO works (workId, name, description, pics)
VALUES (null, 'engine 4', 'very good one', 'https://www.jawaparts.com/fotky6872/fotos/6872_5552__vyr_55504785a--1000.jpg;https://cdn.pixabay.com/photo/2019/03/11/23/36/simson-s51-4049765_960_720.jpg');INSERT INTO works (workId, name, description, pics)
VALUES (null, 'engine 5', 'very good one', 'https://www.jawaparts.com/fotky6872/fotos/6872_5552__vyr_55504785a--1000.jpg;https://cdn.pixabay.com/photo/2019/03/11/23/36/simson-s51-4049765_960_720.jpg');INSERT INTO works (workId, name, description, pics)
VALUES (null, 'engine 6', 'very good one', 'https://www.jawaparts.com/fotky6872/fotos/6872_5552__vyr_55504785a--1000.jpg;https://cdn.pixabay.com/photo/2019/03/11/23/36/simson-s51-4049765_960_720.jpg');INSERT INTO works (workId, name, description, pics)
VALUES (null, 'engine 7', 'very good one', 'https://www.jawaparts.com/fotky6872/fotos/6872_5552__vyr_55504785a--1000.jpg;https://cdn.pixabay.com/photo/2019/03/11/23/36/simson-s51-4049765_960_720.jpg');INSERT INTO works (workId, name, description, pics)
VALUES (null, 'engine 8', 'very good one', 'https://www.jawaparts.com/fotky6872/fotos/6872_5552__vyr_55504785a--1000.jpg;https://cdn.pixabay.com/photo/2019/03/11/23/36/simson-s51-4049765_960_720.jpg');INSERT INTO works (workId, name, description, pics)
VALUES (null, 'engine 9', 'very good one', 'https://www.jawaparts.com/fotky6872/fotos/6872_5552__vyr_55504785a--1000.jpg;https://cdn.pixabay.com/photo/2019/03/11/23/36/simson-s51-4049765_960_720.jpg');INSERT INTO works (workId, name, description, pics)
VALUES (null, 'engine 10', 'very good one', 'https://www.jawaparts.com/fotky6872/fotos/6872_5552__vyr_55504785a--1000.jpg;https://cdn.pixabay.com/photo/2019/03/11/23/36/simson-s51-4049765_960_720.jpg');