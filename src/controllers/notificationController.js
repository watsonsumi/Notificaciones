import NotificationService from '../services/NotificationService.js';

export const newTemplateController = async (req, res, next) => {
	try {
		await NotificationService.createTemplate(req.body);
		res.status(201).json({
			msg: 'Template de la notificacion creada exitosamente',
		});
	} catch (err) {
		next(err);
	}
};

export const sendNotificationController = async (req, res, next) => {
	const dataQuery = req.query;
	const dataBody = req.body;
	try {
		const results = await NotificationService.sendNotification(dataQuery, dataBody);
		const resultsRejected = results
			.filter((result) => result.status === 'rejected')
			.map((result) => result.reason.toString());

		res.status(resultsRejected.length ? 206 : 200).json({
			msg: 'Envio de notificación correctamente',
			exceptions: resultsRejected,
		});
	} catch (err) {
		next(err);
	}
};
