// import twilio from 'twilio';

// const accountSid = process.env.TWILIO_ACCOUNT_SID; // Your Account SID from www.twilio.com/console
// const authToken = process.env.TWILIO_AUTH_TOKEN; // Your Auth Token from www.twilio.com/console

// const client = twilio(accountSid, authToken);

// export const sendSmsWithTemplate = async (dataTemplate, dataSms) => {
// 	let body = dataTemplate.template;

// 	for (let i = 0; i < dataTemplate.variables.length; i++) {
// 		const variable = dataTemplate.variables[i];
// 		const regex = new RegExp(`{{${variable}}}`, 'g');
// 		body = body.replace(regex, dataSms[`${variable}`]);
// 	}

// 	try {
// 		await client.messages.create({
// 			to: dataSms.to_sms, // Text this number
// 			from: process.env.TWILIO_NUMBER, // From a valid Twilio number
// 			body,
// 		});
// 	} catch (error) {
// 		throw new Error(`No se puedo enviar el sms : ${error.message}`);
// 	}
// };