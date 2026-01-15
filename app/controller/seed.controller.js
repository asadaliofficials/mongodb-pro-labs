import PostModel from '../model/post.model.js';
import TodoModel from '../model/todo.model.js';

export const seedPosts = async (req, res) => {
	try {
		const url = 'https://jsonplaceholder.typicode.com/posts';
		const resp = await fetch(url);
		const data = await resp.json();

		const newData = data.map(item => ({
			title: item.title,
			body: item.body,
		}));
		await PostModel.insertMany(newData);

		res.status(201).send('seeded successfully');
	} catch (error) {
		console.error('SEED ERROR:', error);
		res.status(500).send(error);
	}
};
export const seedTodos = async (req, res) => {
	try {
		const url = 'https://jsonplaceholder.typicode.com/todos';
		const resp = await fetch(url);
		const data = await resp.json();

		const newData = data.map(item => ({
			title: item.title,
			body: item.body,
		}));
		await TodoModel.insertMany(newData);

		res.status(201).send('seeded successfully');
	} catch (error) {
		console.error('SEED ERROR:', error);
		res.status(500).send(error);
	}
};
