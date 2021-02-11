import {  Request, Response} from 'express';
import { getCustomRepository, getRepository } from 'typeorm';

import Usuario from '../model/Usuario';
import UsuarioRepository from '../repository/UsuarioRepository';

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

    async getAll(req: Request, res: Response){

        const user = await getRepository(Usuario).find();
         user.forEach(element => {
             delete element.password
         });
        return res.json(user);        
    
    }

    async findByEmail(req: Request, res: Response){

        const user = await getCustomRepository(UsuarioRepository).findByEmail(req.params.email);
           
        return res.json(user);
    }


}
export default new UsuarioController();