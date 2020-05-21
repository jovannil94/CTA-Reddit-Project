DROP DATABASE IF EXISTS reddit_database;
CREATE DATABASE reddit_database;

\c reddit_database;

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS subreddits;
DROP TABLE IF EXISTS posts;
DROP TABLE IF EXISTS votes;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    user_name VARCHAR UNIQUE,
    email VARCHAR UNIQUE,
    password VARCHAR
);

CREATE TABLE posts(
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id) ON DELETE CASCADE,
    title VARCHAR,
    body VARCHAR,
    picture VARCHAR
);

CREATE TABLE subreddits(
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id) ON DELETE SET NULL,
    post_id INT REFERENCES posts(id),
    subname VARCHAR
);

CREATE TABLE votes(
      id SERIAL PRIMARY KEY,
      user_id INT REFERENCES users(id) ON DELETE CASCADE,
      post_id INT REFERENCES posts(id) ON DELETE CASCADE
);

INSERT INTO users
      (user_name, email, password)
VALUES('jiggaflasks', 'jiggaflasks.com', 'password'),
      ('glivercringe', 'glivercringe.com', 'password');

INSERT INTO posts
      (user_id, title, body, picture)
VALUES(1, 'check this out!', 'testing will upload a video here if possible', 3),
      (2, 'thought this was interesting to share', 'upvote please', 2);

INSERT INTO subreddits
      (user_id, post_id, subname)
VALUES(1, 1, 'PublicFreakout'),
      (2, 2, 'Pics');

INSERT INTO votes
      (user_id,post_id)
VALUES(1, 2) ,
      (2, 1);