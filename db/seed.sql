-- seed info will go here
create table users(
    user_id serial primary key,
    user_name varchar(130),
    user_email varchar(150),
    user_image varchar(500),
    auth0_id varchar(350)
)

create table products(
    product_id serial primary key,
    type varchar(150),
    name varchar(150),
    price float,
    storage varchar(150),
    color varchar(150),
    size varchar(150),
    image varchar(500),
    ram varchar(150),
    processor varchar(150)
)

create table carts(
    cart_id serial primary key,
    user_id integer,
    product_id integer,
    quantity integer
)
