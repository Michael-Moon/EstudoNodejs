import { Router } from 'express';
import medicoRouter from './Medico.routes';


const router = Router();

router.use('/medico', medicoRouter);

export default router;