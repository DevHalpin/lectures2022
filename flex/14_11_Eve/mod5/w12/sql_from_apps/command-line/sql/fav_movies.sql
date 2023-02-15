DROP TABLE IF EXISTS fav_movies;

CREATE TABLE fav_movies (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    year INTEGER,
    genre VARCHAR(50),
    run_time INTEGER
);

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    secret_info VARCHAR(50)
);

INSERT INTO fav_movies (name, year, genre, run_time)
VALUES 
    ('The Land Before Time', 1988, 'Family', 89),
    ('Fight Club', 1999, 'Action', 139),
    ('The Matrix', 1999, 'Action', 136),
    ('Lord of the Rings', 2001, 'Fantasy', 178),
    ('The Godfather', 1972, 'Drama', 158);

INSERT INTO users (name, secret_info) VALUES ('Bob', ''), ('Admin', 'super-secret-passwords')