CREATE TABLE stores (
    id SERIAL PRIMARY KEY,
    name TEXT
);

CREATE TABLE foods (
		id SERIAL PRIMARY KEY,
		store_id INTEGER,
		name TEXT
);