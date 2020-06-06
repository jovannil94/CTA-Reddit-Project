--\c reddit_database;

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