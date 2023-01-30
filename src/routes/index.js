import Router from 'express';
import { newTemplateController, sendNotificationController } from '../controllers/notificationController.js';
import { templateIfExists, templateIfNotExists } from '../middlewares/templateExists.js';
import { validatorTemplate } from '../middlewares/validator-template.js';

const router = Router();

router.post('/notification/template', [validatorTemplate, templateIfNotExists], newTemplateController);
router.post('/notification/send', templateIfExists, sendNotificationController);

export default router;