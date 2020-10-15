import express from 'express';

const app = express();

app.get('/', (req, res) => {
  return res.json({ message: 'Hello World' });
});

// Definindo a porta onde roda o servidor
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server está sendo executado na porta ${port}`);
});