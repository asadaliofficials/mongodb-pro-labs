import mongoose from 'mongoose';

const Post = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
		body: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

const PostModel = mongoose.model('post', Post);

export default PostModel;
