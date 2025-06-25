const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const frases = [
  'A persistência realiza o impossível.',
  'Cada dia é uma nova chance para ser melhor.',
  'Você é mais capaz do que imagina.',
  'Não espere por oportunidades. Crie-as.'
];

app.get('/frase', (req, res) => {
  const index = Math.floor(Math.random() * frases.length);
  res.send(frases[index]);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
