CREATE TABLE IF NOT EXISTS stores (
    id SERIAL PRIMARY KEY,
    name TEXT
);

CREATE TABLE IF NOT EXISTS foods (
		id SERIAL PRIMARY KEY,
		store_id INTEGER,
		name TEXT
);

CREATE TABLE IF NOT EXISTS users (
		id SERIAL PRIMARY KEY,
		name TEXT,
		email TEXT,
		password TEXT
);

CREATE TABLE IF NOT EXISTS orders (
		id SERIAL PRIMARY KEY,
		user_id INTEGER,
		store_id INTEGER,
		delivery_status BOOLEAN,
		order_time TEXT
);

CREATE TABLE IF NOT EXISTS order_list (
		id SERIAL PRIMARY KEY,
		order_id INTEGER,
		food_id INTEGER
);