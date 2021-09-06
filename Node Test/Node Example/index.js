const express = require('express');

const server  = express();

server.use(express.json());

const geeks = ['Bruno', 'Alves', 'Comitre'];

////////////////////////////////// MIDDLEWARES /////////////////////////////////

// Middlewares Globais
server.use((req, res, next) => {
  console.time('Request');
  console.log(`Método: ${req.method}; URL: ${req.url};`);
  next();
  console.log('Finalizou');
  console.timeEnd('Request');
});

// Middlewares Locais
function checkGeekExists(req, res, next) {
  if (!req.body.name){
    return res.status(400).json({error: 'Geek name is required'});
  }
  return next();
}

function checkGeekInArray(req, res, next) {
  const geek = geeks[req.params.index];
  if (!geek) {
    return res.status(400).json({error: 'Geek does not exists'});
  }
  req.geek = geek;
  return next();
}

//////////////////////////////// FIM MIDDLEWARES ///////////////////////////////


////////////////////////////////// ROTA TESTE //////////////////////////////////

// req ➔ representa todos os dados da requisição.
// res ➔ todas as informações necessárias para informar uma resposta para o front-end.
server.get('/teste', (req, res) => {
  // console.log('Teste');
  return res.json({message: 'Hello World!'})
})

///////////////////////////////// FIM ROTA TESTE ///////////////////////////////


////////////////////////////////// ROTA GEEK ///////////////////////////////////

// Return all geeks
server.get('/geeks', (req, res) => {
  return res.json(geeks);
})

server.get('/geeks/:index', checkGeekInArray, (req, res) => {
// server.get('/geeks/:index', (req, res) => {
  return res.json(req.geek);
})

// Create geeks
server.post('/geeks', checkGeekExists, (req, res) => {
// server.post('/geeks', (req, res) => {
  const { name } = req.body;
  geeks.push(name);
  return res.json(geeks);
})

// Update geeks
server.put('/geeks/:index', (req, res) => {
  const { index } = req.params;
  const { name } = req.body;
  geeks[index] = name;
  return res.json(geeks);
})

// Delete geeks
server.delete('/geeks/:index', (req, res) => {
  const { index } = req.params;
  geeks.splice(index, 1);
  return res.send();
})

//////////////////////////////// FIM ROTA GEEK /////////////////////////////////

server.listen(3000);
