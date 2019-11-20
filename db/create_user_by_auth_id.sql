INSERT INTO users
    (auth0_id, user_email, user_name)
VALUES
    ($1, $2, $3);
SELECT *
FROM users
WHERE auth0_id = $1