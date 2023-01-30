import express from 'express';
import morgan from 'morgan';

import { connect } from './db/connectDB.js';
import { errorHandler } from './handlers/errorHandler.js';
import router from './routes/index.js';

class Server {
	#app;
	#port;
	constructor() {
		this.#app = express();
		this.#port = process.env.PORT || 8080;

		this.dbConnect();
		this.middlewares();
		this.routes();
		this.handlers();
	}

	async dbConnect() {
		await connect();
	}

	middlewares() {
		this.#app.use(morgan('dev'));
		this.#app.use(express.json());
		this.#app.use(express.urlencoded({ extended: true }));
	}

	routes() {
		this.#app.use('/api/v1', router);
	}

	handlers() {
		this.#app.use(errorHandler);
	}

	listen() {
		this.#app.listen(this.#port, () => {
			console.log('Server listening on port ' + this.#port);
		});
	}
}

export default Server;
