import "reflect-metadata";
import express from  'express';

import './database/conexao';
import routers from './routes/routes';

const api = require('./apiViaCep');
const app = express();

app.use(express.json());
app.use(routers);

app.listen(3000, () => console.log("serve iniciado em http://localhost:3000"));