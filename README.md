# Proyecto de Notificación

## Node.js v16.18.0

Este proyecto está utilizando las siguientes librerías de Node.js:

- **axios**: Una librería para hacer solicitudes HTTP. Se puede utilizar para conectarse a APIs externas y recuperar datos.
- **dotenv**: Una librería para cargar variables de entorno desde un archivo .env. Esto permite una fácil configuración de información sensible como contraseñas de bases de datos.
- **express**: Un popular y minimalista framework web para Node.js. Se utiliza para manejar enrutamiento y middleware.
- **express-validator**: Una librería para validar solicitudes HTTP en Express. Se utiliza para garantizar que los datos enviados al servidor sean válidos.
- **handlebars**: Una librería para generar plantillas HTML. Se utiliza para crear vistas en el servidor.
- **mongoose**: Una librería para conectarse y trabajar con bases de datos MongoDB.
- **morgan**: Una librería para registrar solicitudes HTTP. Se utiliza para hacer un seguimiento de las solicitudes entrantes al servidor.
- **nodemailer**: Una librería para enviar correos electrónicos desde Node.js.
- **twilio**: Una librería para enviar y recibir mensajes de texto y realizar llamadas telefónicas utilizando la plataforma Twilio.

## Variables de entorno

Este proyecto utiliza las siguientes variables de entorno para configurar la aplicación:

- `MONGO_URI`: La dirección de la conexión a la base de datos MongoDB.
- `AWS_PASWORD_USER`: La contraseña del usuario de AWS.
- `AWS_HOST_USER`: El host del usuario de AWS.
- `AWS_EMAIL_FROM`: El correo electrónico desde el cual se enviarán correos electrónicos utilizando AWS.
- `AWS_EMAIL_NAME`: El nombre del remitente de correos electrónicos enviados con AWS.
- `AWS_USERNAME`: El nombre de usuario de AWS.
- `WS_PHONE_NUM_ID`: El id del número de teléfono utilizado para enviar mensajes de texto con Whatsapp Business.
- `WS_USER_ACCES_TOKEN`: El token de acceso para el envio de mensajes de Whatsapp Business.
- `WS_VERSION`: La versión de la API de Whatsapp Business utilizada.
- `TWILIO_ACCOUNT_SID`: El SID de la cuenta Twilio.
- `TWILIO_AUTH_TOKEN`: El token de autenticación de la cuenta Twilio.
- `TWILIO_NUMBER`: El número de teléfono Twilio utilizado para enviar mensajes de texto.

Es importante asegurar que estas variables estén establecidas antes de ejecutar la aplicación. Puedes usar un archivo `.env` para establecer estas variables de entorno en desarrollo.
