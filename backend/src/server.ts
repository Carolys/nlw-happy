import express from 'express';
import path from 'path';
import cors from 'cors';
import 'express-async-errors';

import './database/connection';

import routes from './routes';
import errorHandler from './errors/handler';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use(errorHandler);

app.listen(3333);

// Rota = conjunto
// Recurso = usuario

// Metodos HTTP = GET, POST, PUT, DELETE
// Parametros

// GET = Buscar uma informacao (Lista, item)
// POST = Criando uma informacao
// PUT  = Editando uma informacao
// DELETE = Deletando uma informacao

// Query Params: http://localhost:3333/users?search=diego
// Route Params: http://localhost:3333/users/1 (Identificar um recurso)
// Body

// Driver nativo, Query builder, ORM
// Query builder, ORM - suportam a integracao de varios banco de dados
// Object Relational Mapping