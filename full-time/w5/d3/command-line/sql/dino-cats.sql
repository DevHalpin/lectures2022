DROP TABLE IF EXISTS dino_cats;

CREATE TABLE dino_cats (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50),
  diet VARCHAR(50)
);

INSERT INTO dino_cats 
  (name, diet)
VALUES
  ('Fred', 'Dino Mice'),
  ('Joni', 'Dino Birds'),
  ('Tuna', 'Dino Fish'),
  ('Precious', 'Junior Devs');