import nodemailer from 'nodemailer';
import handlebars from 'handlebars';

const { AWS_PASWORD_USER, AWS_HOST_USER, AWS_EMAIL_FROM, AWS_EMAIL_NAME, AWS_USERNAME } = process.env;

export const sendEmailWithTemplate = async (dataTemplate, dataEmail) => {
	const transporter = nodemailer.createTransport({
		host: AWS_HOST_USER, // 'email-smtp.us-east-1.amazonaws.com', //'smtp.gmail.com',
		secure: true,
		port: 465, // 587,
		auth: {
			user: AWS_USERNAME, // 'AKIAYVR7N3ZJBB6JVQGE', //'wellxxy.prueba@gmail.com',
			pass: AWS_PASWORD_USER, // 'BDOmqObSN8gKxg1EcVwi/xpYt352OxTEvUI4oGrmlSio', //'iynorubyfykxcnbe',
		},
		debug: true,
	});

	const template = handlebars.compile(dataTemplate.template);

	const html = template(dataEmail);

	const mailOptions = {
		from: '"' + AWS_EMAIL_NAME + '" <' + AWS_EMAIL_FROM + '>',
		to: dataEmail.to_email,
		subject: 'Message title',
		// text: mensaje,
		html,
	};

	try {
		await transporter.sendMail(mailOptions);
	} catch (error) {
		throw new Error(`Error al enviar el email: ${error.message}`);
	}
};
