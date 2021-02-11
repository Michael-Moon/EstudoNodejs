import { promises } from 'fs';
import { EntityRepository, Repository } from 'typeorm';
import Usuario from '../model/Usuario';

@EntityRepository(Usuario)
export default class UsuarioRepository extends Repository<Usuario>{

    public async findByEmail(email: string) : Promise<Usuario[]>{
        
        return this.find({
            where: {
                email: email
            }
        }) 
    }
}
