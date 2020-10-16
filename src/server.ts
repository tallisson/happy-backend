import express from 'express';
import path from 'path';
import './database/connection';

import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes);

app.use('/images', express.static(path.join(__dirname, '..', 'uploads')));

// Definindo a porta onde roda o servidor
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server está sendo executado na porta ${port}`);
});