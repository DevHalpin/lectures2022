-- Creating a joining table in Postgres
CREATE TABLE compilations (
  artist_id INTEGER REFERENCES artists(id) NOT NULL
  album_id INTEGER REFERENCES albums(id) NOT NULL
);

-- How to join multiple tables together to get data from all of them
SELECT albums.*, tracks.*, compilations.year FROM compilations
JOIN albums ON album_id = albums.id
JOIN tracks ON album_id = albums.id
