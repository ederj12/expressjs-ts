import express, { Application } from 'express';
import morgan from 'morgan';
import 'dotenv/config';
import { pingRouter } from './routes';

const PORT = process.env.PORT;

const app: Application = express();

app.use(express.json());
app.use(morgan('tiny'));
app.use(express.static('public'));

app.use(pingRouter);

app.listen(PORT, () => {
  console.log('Server is running on port', PORT);
});
