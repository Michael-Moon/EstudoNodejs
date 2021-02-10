import {  Request, Response} from 'express';
import { getRepository } from 'typeorm';

import Usuario from '../model/Usuario';

class UsuarioController {

    index(req: Request, res: Response){
       return res.send( { usuarioId: req.usuarioId } ); 
    }

    async strore(req: Request, res: Response){

        const repository = getRepository(Usuario);
        const { email, password } = req.body;
        
        const usuarioExistente = await repository.findOne( { where: { email } } );

        if(usuarioExistente){
            return res.sendStatus(409);
        }

        const usuario = repository.create( { email, password } );

        await repository.save(usuario);
        
        return res.json(usuario);
    }


}
export default new UsuarioController();