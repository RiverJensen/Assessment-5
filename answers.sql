
-- QUESTION 1

SELECT * FROM customers ORDER BY email;

-- QUESTION 2 (not done )

SELECT id FROM orders WHERE customer_id IN (SELECT customer_id FROM customers WHERE fname = 'Elizabeth' AND lname = 'Crocker');

-- QUESTION 3  
SELECT SUM(cupcakes) AS sum FROM orders WHERE order = 'unprocessed';
-- QUESTION 4

SELECT c.name AS name, COALESCE(SUM(o.num_cupcakes), 0) AS sum
FROM cupcakes c
LEFT JOIN orders o ON cupcakes.id = o.cupcake_id
GROUP BY cupcakes.name
ORDER BY cupcakes.name;



-- QUESTION 5

SELECT cupcakes.email AS email, COALESCE(SUM(o.num_cupcakes), 0) AS total
FROM customers c
LEFT JOIN orders o ON cupcakes.id = o.customer_id
GROUP BY cupcakes.email
ORDER BY total DESC;


-- QUESTION 6

SELECT DISTINCT cupcakes.fname, cupcakes.lname, cupcakes.email
FROM customers cupcakes
JOIN orders o ON cupcakes.id = o.customer_id
JOIN cupcakes cp ON o.cupcake_id = cupcakes.id
WHERE cupcakes.name = 'funfetti' AND o.processed = TRUE;
