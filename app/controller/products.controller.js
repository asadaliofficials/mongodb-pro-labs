import PostModel from '../model/post.model.js';
import ProductModel from '../model/product.model.js';

export const getProducts = async (req, res) => {
	try {
		const products = await ProductModel.find({ price: { $gt: 50 } });
		res.status(200).json({
			success: true,
			count: products.length,
			data: products,
		});
	} catch (error) {
		console.error('GET PRODUCTS ERROR:', error);
		res.status(500).json({
			success: false,
			message: 'Failed to fetch products',
		});
	}
};
