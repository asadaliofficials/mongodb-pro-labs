import express from 'express';
import { seedPosts, seedProducts, seedTodos } from './controller/seed.controller.js';
import { getProducts } from './controller/products.controller.js';

const app = express();

app.get('/', (req, res) => {
	res.send('Hello World');
});

// routes to seed the database with dummy data
app.get('/seed/posts', seedPosts);
app.get('/seed/todos', seedTodos);
app.get('/seed/products', seedProducts);

// routes to get products
app.get('/products', getProducts)

export default app;
