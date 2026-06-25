CREATE TABLE testimonials_rating_update (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  rating INTEGER NOT NULL CHECK (rating BETWEEN 1 AND 5),
  testimonial TEXT NOT NULL,
  created_at TEXT NOT NULL
);

INSERT INTO testimonials_rating_update (id, name, rating, testimonial, created_at)
SELECT id, name, rating, testimonial, created_at FROM testimonials;

DROP TABLE testimonials;
ALTER TABLE testimonials_rating_update RENAME TO testimonials;

CREATE INDEX testimonials_created_at_idx
ON testimonials (created_at DESC);
