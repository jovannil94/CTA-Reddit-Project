DROP DATABASE IF EXISTS reddit_database;
CREATE DATABASE reddit_database;

/c reddit_database;

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS subreddit;
DROP TABLE IF EXISTS posts;
DROP TABLE IF EXISTS votes;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    user_name VARCHAR UNIQUE,
    email VARCHAR UNIQUE,
    password VARCHAR
);

CREATE TABLE subreddit(
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id) ON DELETE SET NULL,
    post_id INT REFERENCES posts(id)
);

CREATE TABLE posts(
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id) ON DELETE CASCADE,
    title VARCHAR,
    body VARCHAR,
    picture VARCHAR
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