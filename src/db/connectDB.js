import mongoose from 'mongoose';

export const connect = async () => {
	try {
		mongoose.set('strictQuery', false);
		await mongoose.connect(process.env.MONGO_URI);
		console.log('MongoDB connection established');
	} catch (error) {
		console.log('Error connecting to MongoDB', error.message);
	}
};
