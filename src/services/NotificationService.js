import NotificationRepository from '../repositories/NotificationRepository.js';
import { sendEmailWithTemplate } from '../utils/sendEmail.js';
// import { sendSmsWithTemplate } from '../utils/sendSMS.js';
import { sendWhatsappWithTemplate } from '../utils/sendWhatsapp.js';

class NotificationService {
    async createTemplate(templateData) {
        const newNotifications = await NotificationRepository.createTemplate(templateData);
        return newNotifications;
    }

    async sendNotification(notificationOptions, notificationDataSend) {
        const typesNotifications = notificationOptions.type.split(',');
        const templates = await Promise.all(
            typesNotifications.map((type) => NotificationRepository.getTemplate({...notificationOptions, type }))
        );

        return await Promise.allSettled(
            templates
            .filter((template) => template)
            .map((template) => {
                if (template.type === 'SMS') {
                    // return sendSmsWithTemplate(template, notificationDataSend);
                }
                if (template.type === 'WHATSAPP') {
                    return sendWhatsappWithTemplate(template, notificationDataSend);
                }
                return sendEmailWithTemplate(template, notificationDataSend);
            })
        );
    }
}

export default new NotificationService();