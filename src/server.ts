import express from 'express';
import 'express-async-errors';
import path from 'path';
import cors from 'cors';

import './database/connection';

import routes from './routes';
import errorHandler from './errors/handler';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/images', express.static(path.join(__dirname, '..', 'uploads')));
app.use(errorHandler);

// Definindo a porta onde roda o servidor
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server está sendo executado na porta ${port}`);
});