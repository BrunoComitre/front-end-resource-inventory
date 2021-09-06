# Server Node Crud

[Passo a passo para criar um CRUD com NodeJS do zero](https://blog.geekhunter.com.br/criar-crud-nodejs/)

## Rotas para adicionar ao Hoppscotch

**Rota de teste**
GET: http://localhost:3000/teste

**Listar todos os geeks**
GET: http://localhost:3000/geeks

**Listagem de um Geek**
GET: http://localhost:3000/geeks/0

**Criar Geeks**
POST: http://localhost:3000/geeks
corpo do JSON:
{
"name": "Luke"
}

**Editar o Geek**
PUT: http://localhost:3000/geeks/4
corpo do JSON:
{
"name": "Luke Skywalker"
}

**Excluir um Geek**
no corpo selecione a opção “No body”
DELETE: http://localhost:3000/geeks/4

***

