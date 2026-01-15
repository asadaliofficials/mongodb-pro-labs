import mongoose from 'mongoose';

const Todo = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
		completed: {
			type: Boolean,
			default: false,
		},
	},
	{
		timestamps: true,
	}
);

const TodoModel = mongoose.model('todo', Todo);

export default TodoModel;
