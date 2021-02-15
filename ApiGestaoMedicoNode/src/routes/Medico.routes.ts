import { Router } from 'express';
import MedicoController from '../app/controller/MedicoController';

const api = require('../apiViaCep');
const medicoRouter = Router();

medicoRouter.post('/', MedicoController.create);
medicoRouter.get('/', MedicoController.ShowAll);

export default medicoRouter;