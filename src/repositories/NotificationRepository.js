import Notification from '../models/Notification.js';

class NotificationRepository {
	async createTemplate(templateData) {
		const notification = new Notification(templateData);
		const newNotifications = await notification.save();
		return newNotifications;
	}

	async getTemplate(templateData) {
		const template = await Notification.findOne({
			$and: [{ title: templateData.title }, { app: templateData.app }, { type: templateData.type }],
		});
		return template;
	}
}

export default new NotificationRepository();
