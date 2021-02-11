import { Router } from 'express';

import authMiddaleware from '../app/middlewares/authMiddleware';

import UsuarioController from '../app/controller/UsuarioController';
import AuthController from '../app/controller/AuthController';

const usuarioRouter = Router();

usuarioRouter.post('/', UsuarioController.strore);
usuarioRouter.post('/auth', AuthController.autenticacao);
usuarioRouter.get('/', authMiddaleware , UsuarioController.index);
usuarioRouter.get('/getAll',UsuarioController.getAll );
usuarioRouter.get('/:email',UsuarioController.findByEmail );

export default usuarioRouter;