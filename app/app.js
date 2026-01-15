import express from 'express';
import { seedPosts, seedProducts, seedTodos } from './controller/seed.controller.js';

const app = express();

app.get('/', (req, res) => {
	res.send('Hello World');
});

app.get('/seed/posts', seedPosts);
app.get('/seed/todos', seedTodos);
app.get('/seed/products', seedProducts);

export default app;
