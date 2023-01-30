import axios from 'axios';

const tokenUser = process.env.WS_USER_ACCES_TOKEN;
const versionWS = process.env.WS_VERSION;
const phoneNumId = process.env.WS_PHONE_NUM_ID;

const url = `https://graph.facebook.com/${versionWS}/${phoneNumId}/messages`;

export const sendWhatsappWithTemplate = async (dataTemplate, dataWhatsapp) => {
	let body = dataTemplate.template;

	for (let i = 0; i < dataTemplate.variables.length; i++) {
		const variable = dataTemplate.variables[i];
		const regex = new RegExp(`{{${variable}}}`, 'g');
		body = body.replace(regex, dataWhatsapp[`${variable}`]);
	}

	const paramsWS = {
		messaging_product: 'whatsapp',
		recipient_type: 'individual',
		to: dataWhatsapp.to_whatsapp,
		type: 'text',
		text: { body },
	};

	try {
		await axios.post(url, paramsWS, {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${tokenUser}`,
			},
		});
	} catch (error) {
		throw new Error(`No se puedo enviar el mensaje de whatsapp : ${error.response.data.error.message}`);
	}
};
