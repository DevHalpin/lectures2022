CREATE TABLE students(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255)
);

CREATE TABLE pets(
    id SERIAL PRIMARY KEY,
    breed VARCHAR(255),
    name VARCHAR(255),
    age INTEGER,
    type VARCHAR(255),
    colour VARCHAR(255),
    student_id INTEGER REFERENCES students(id) NOT NULL
);

-- student #1
INSERT INTO students (name)
VALUES('Domara Hawil');

INSERT INTO pets(breed,name,age,type,colour, student_id)
VALUES('Labrador', 'Tobi', 3, 'dog', 'yellow', 1);

-- student #2
INSERT INTO students (name)
VALUES('Sam Maisha');

INSERT INTO pets(breed,name,age,type,colour, student_id)
VALUES('Staffy', 'Doug', 5, 'dog', 'grey', 2);

-- student #3
INSERT INTO students (name)
VALUES('Jorge Vera');

INSERT INTO pets(breed,name,age,type,colour, student_id)
VALUES('Char Pei', 'Firulais', 5, 'dog', 'brown', 3);

-- student #4
INSERT INTO students (name)
VALUES('Nour Mohamoud');

INSERT INTO pets(breed,name,age,type,colour, student_id)
VALUES('Ragamuffin', 'Tiger', 7, 'cat', 'brown+white', 4);

-- Retreive all students...
SELECT * FROM students;

-- Retrieve all pets...
SELECT * FROM pets;
SELECT name, type, breed FROM pets;

-- Grab pet with ID #3
SELECT name, type
FROM pets
WHERE id = 3;

-- Pagination

-- (Page 1)
SELECT id, name
FROM pets
OFFSET 0
LIMIT 3;

-- (Page 3)
SELECT id, name
FROM pets
OFFSET 6
LIMIT 3;

-- Order
SELECT id, name
FROM pets
ORDER BY name ASC;

-- INNER JOIN example
SELECT
    students.name AS student_name,
    pets.name AS pet_name,
    type
FROM students -- LEFT table
JOIN pets -- RIGHT table
ON students.id = pets.student_id; -- This defines our MATCH!!!

-- LEFT JOIN example
SELECT
    students.name AS student_name,
    pets.name AS pet_name,
    type
FROM students -- LEFT table
LEFT JOIN pets -- RIGHT table
ON students.id = pets.student_id; -- This defines our MATCH!!!

-- NULL CHECK example
SELECT
    students.name AS student_name,
    pets.name AS pet_name,
    type
FROM students -- LEFT table
LEFT JOIN pets -- RIGHT table
ON students.id = pets.student_id
WHERE pets.student_id IS NULL; -- Only students returned with NULL pet