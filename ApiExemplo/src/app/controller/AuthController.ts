import {  Request, Response} from 'express';
import { getRepository } from 'typeorm';

import  bcrypt  from 'bcryptjs';
import jwt from 'jsonwebtoken';


import Usuario from '../model/Usuario';

class AuthController {

   

    async autenticacao(req: Request, res: Response){

        const repository = getRepository(Usuario);
        const { email, password } = req.body;
        
        const usuario = await repository.findOne( { where: { email } } );

        if(!usuario){
            return res.sendStatus(401);
        }
       
        const isValidPassword = await bcrypt.compare(password, usuario.password);

        if(!isValidPassword){

            return res.sendStatus(401);
        }

        const token = jwt.sign( { id: usuario.id }, 'secret', { expiresIn: '1d' } );
        
        delete usuario.password;
        
        return res.json({
            usuario,
            token,
        })
    }


}
export default new AuthController();