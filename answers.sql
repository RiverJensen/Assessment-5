
-- QUESTION 1

SELECT * FROM customers ORDER BY email;

-- QUESTION 2 (not done )

SELECT id FROM orders WHERE customer_id IN (SELECT customer_id FROM customers WHERE fname = 'Elizabeth' AND lname = 'Crocker');

-- QUESTION 3  
SELECT SUM(cupcakes) AS sum FROM orders WHERE order = 'unprocessed';
-- QUESTION 4

-- QUESTION 5

-- QUESTION 6