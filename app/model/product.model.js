import mongoose from 'mongoose';

const ReviewSchema = new mongoose.Schema({
	rating: { type: Number, required: true },
	comment: { type: String, required: true },
	date: { type: Date, required: true },
	reviewerName: { type: String, required: true },
	reviewerEmail: { type: String, required: true },
});

const DimensionsSchema = new mongoose.Schema({
	width: { type: Number, required: true },
	height: { type: Number, required: true },
	depth: { type: Number, required: true },
});

const MetaSchema = new mongoose.Schema({
	createdAt: { type: Date, default: Date.now },
	updatedAt: { type: Date, default: Date.now },
	barcode: { type: String },
	qrCode: { type: String },
});

const ProductSchema = new mongoose.Schema({
	id: { type: Number },
	title: { type: String, required: true },
	description: { type: String },
	category: { type: String },
	price: { type: Number, required: true },
	discountPercentage: { type: Number, default: 0 },
	rating: { type: Number, default: 0 },
	stock: { type: Number, default: 0 },
	tags: [{ type: String }],
	brand: { type: String },
	sku: { type: String },
	weight: { type: Number },
	dimensions: DimensionsSchema,
	warrantyInformation: { type: String },
	shippingInformation: { type: String },
	availabilityStatus: { type: String },
	reviews: [ReviewSchema],
	returnPolicy: { type: String },
	minimumOrderQuantity: { type: Number, default: 1 },
	meta: MetaSchema,
	images: [{ type: String }],
	thumbnail: { type: String },
});

ProductSchema.pre('save', function (next) {
	this.meta.updatedAt = new Date();
	next();
});

const ProductModel = mongoose.model('product', ProductSchema);
export default ProductModel;
