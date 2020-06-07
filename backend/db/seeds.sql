--\c reddit_database;

INSERT INTO users
      (user_name, email, password)
VALUES('jiggaflasks', 'jiggaflasks.com', 'password'),
      ('glivercringe', 'glivercringe.com', 'password');

INSERT INTO subreddits
      (user_id, subname)
VALUES(1, 'PublicFreakout'),
      (2, 'Pics');

INSERT INTO posts
      (user_id, subreddits_id, title, body)
VALUES(1, 1, 'check this out!', 'testing will upload a video here if possible'),
      (2, 2, 'thought this was interesting to share', 'upvote please');

INSERT INTO votes
      (user_id,post_id)
VALUES(1, 2) ,
      (2, 1);