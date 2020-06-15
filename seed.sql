INSERT INTO stores (name) VALUES('Nestle');
INSERT INTO stores (name) VALUES('NTUC');
INSERT INTO stores (name) VALUES('Watsons');
INSERT INTO stores (name) VALUES('Mcdonalds');
INSERT INTO stores (name) VALUES('Subway');

INSERT INTO foods (store_id, name) VALUES(1 , 'Chocolate');
INSERT INTO foods (store_id, name) VALUES(2 , 'Apple');
INSERT INTO foods (store_id, name) VALUES(3 , 'Medicine');
INSERT INTO foods (store_id, name) VALUES(4 , 'Big Mac');
INSERT INTO foods (store_id, name) VALUES(5 , 'Sandwich');

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