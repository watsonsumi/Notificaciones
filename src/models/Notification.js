import mongoose from 'mongoose';

const notificationsSchema = new mongoose.Schema({
	template: {
		type: String,
		required: [true, 'El template es requerido'],
	},
	variables: {
		type: [String],
	},
	title: {
		type: String,
		required: [true, 'El titulo del template es requerido'],
		uppercase: true,
	},
	app: {
		type: String,
		required: [true, 'El nombre de la app es requerido'],
		uppercase: true,
	},
	type: {
		type: String,
		required: [true, 'El tipo de template es requerido'],
		enum: ['EMAIL', 'WHATSAPP', 'SMS'],
		uppercase: true,
	},
});

export default mongoose.model('notification', notificationsSchema);
