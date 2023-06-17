import express from 'express';
import dotEnv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import userRoute from './router/userRoute.js';
const app = express();
dotEnv.config();

//middlewares
app.use(express.json());
app.use(cors());

// Routers
app.use('/user', userRoute);

const connect = async () => {
	try {
		mongoose.set('strictQuery', false);
		await mongoose.connect(process.env.MONGO);
		console.log('Connected to mongoDB.');
	} catch (error) {
		throw error;
	}
};

app.get('/', (req, res) => {
	res.send('Hello World!');
});

mongoose.connection.on('disconnected', () => {
	console.log('mongoDB disconnected!');
});

const port = process.env.PORT;
app.listen(port, () => {
	connect();
	const myApp = `App is running on port : ${port}`;
	console.log(myApp);
});
