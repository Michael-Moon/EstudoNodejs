import { Router } from 'express';

import authMiddaleware from './app/middlewares/authMiddleware';

import UsuarioController from './app/controller/UsuarioController';
import AuthController from './app/controller/AuthController';



const router = Router();

router.post('/usuario', UsuarioController.strore);
router.post('/auth', AuthController.autenticacao);

router.get('/usuario', authMiddaleware , UsuarioController.index);

export default router;