import NotificationRepository from '../repositories/NotificationRepository.js';

export const templateIfNotExists = async (req, res, next) => {
	const { title, app, type } = req.body;
	try {
		const template = await NotificationRepository.getTemplate({
			title,
			app,
			type,
		});
		if (!template) {
			next();
		} else {
			const err = new Error(`El template con el titulo "${title}" de tipo "${type}" para la app "${app}" ya existe`);
			err.status = 422;
			next(err);
		}
	} catch (err) {
		next(err);
	}
};
export const templateIfExists = async (req, res, next) => {
	const { title, app, type } = req.query;

	const types = type.split(',');

	const templates = await Promise.allSettled(
		types.map((type) => NotificationRepository.getTemplate({ ...req.query, type }))
	);

	if (templates.every((template) => template.status === 'rejected')) {
		const err = new Error('Error en la base de datos');
		err.status = 500;
		return next(err);
	}

	if (templates.every((template) => !template.value)) {
		const err = new Error(
			`El template con el titulo "${title}" de tipo(s) "${type}" para la app "${app}" no existe(n)`
		);
		err.status = 422;
		return next(err);
	}

	next();
};
