INSERT INTO users
    (auth0_id, user_email, user_name, user_image)
VALUES
    ($1, $2, $3, $4);
SELECT *
FROM users
WHERE auth0_id = $1