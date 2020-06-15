INSERT INTO stores (name) VALUES('Ah Chua Duck Rice store');
INSERT INTO stores (name) VALUES('Jinny Western Food');
INSERT INTO stores (name) VALUES('Edward Scissors cut rice');
INSERT INTO stores (name) VALUES('Fiona Sushi bar');
INSERT INTO stores (name) VALUES('Muthu curry');

INSERT INTO foods (store_id, name) VALUES(1 , 'Roasted Duck Rice');
INSERT INTO foods (store_id, name) VALUES(1 , 'Roasted Duck Noodle');
INSERT INTO foods (store_id, name) VALUES(1 , 'Braised Chicken Rice');

INSERT INTO foods (store_id, name) VALUES(2 , 'Chicken Chop');
INSERT INTO foods (store_id, name) VALUES(2 , 'Aglio Olio');
INSERT INTO foods (store_id, name) VALUES(2 , 'Carbonara');
INSERT INTO foods (store_id, name) VALUES(2 , 'French Fries');

INSERT INTO foods (store_id, name) VALUES(3 , '1 Veg 1 Meat');
INSERT INTO foods (store_id, name) VALUES(3 , '2 Veg 1 Meat');
INSERT INTO foods (store_id, name) VALUES(3 , '1 Veg 2 Meat');
INSERT INTO foods (store_id, name) VALUES(3 , '2 Veg 2 Meat');

INSERT INTO foods (store_id, name) VALUES(4 , 'Salmon Sushi');
INSERT INTO foods (store_id, name) VALUES(4 , 'Ikura Sushi');
INSERT INTO foods (store_id, name) VALUES(4 , 'Tamago Sushi');
INSERT INTO foods (store_id, name) VALUES(4 , 'Unagi Sushi');
INSERT INTO foods (store_id, name) VALUES(4 , 'Salmon Sashimi');

INSERT INTO foods (store_id, name) VALUES(5 , 'Prata 2pc');
INSERT INTO foods (store_id, name) VALUES(5 , 'Onion Prata');
INSERT INTO foods (store_id, name) VALUES(5 , 'Egg Prata');
INSERT INTO foods (store_id, name) VALUES(5 , 'Chicken Curry');
INSERT INTO foods (store_id, name) VALUES(5 , 'Mutton Curry');

INSERT INTO users (name, email, password)
	VALUES(
		'Bob',
		'Bob@email.com',
		'passwordbob'
	);

INSERT INTO users (name, email, password)
	VALUES(
		'Joe',
		'Joe@email.com',
		'passwordjoe'
	);

INSERT INTO users (name, email, password)
	VALUES(
		'Foo',
		'Foo@email.com',
		'passwordfoo'
	);

INSERT INTO users (name, email, password)
	VALUES(
		'Bar',
		'Bar@email.com',
		'passwordbar'
	);

INSERT INTO orders (user_id, store_id, delivery_status, order_time)
	VALUES(
		'1',
		'3',
		'f',
		'afternoon!'
	);

INSERT INTO order_list (order_id, food_id)
	VALUES(
		'1',
		'3'
	);