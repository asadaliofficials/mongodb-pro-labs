import express from 'express';
import { seedPosts } from './controller/seed.controller.js';

const app = express();

app.get('/', (req, res) =>{
  res.send('Hello World');
})

app.get('/seed/posts', seedPosts)

export default app;