import express from  'express';
import { Request, Response, json } from 'express';
import { getRepository } from 'typeorm';

import Medico from '../model/Medico';



 class MedicoController {

    async create(req: Request, res: Response){

       try {

        const repository = getRepository(Medico);
        const api = require('../apiViaCep');
        const app = express();

        const { nome, crm, telefoneFixo,
        telefoneCelular, endereco , especialidade } = req.body;

        const medico = repository.create( {nome, crm, telefoneFixo,
        telefoneCelular, endereco, especialidade} );

        // app.get('/', (req, res) => {

        // }) 
       
        medico.especialidade = req.body.especialidades;
        

        await repository.save(medico);        

        return res.json(medico);
           
       } catch (error) {
            
        return res.sendStatus(401); 
       }

    }

    async ShowAll(req: Request, res: Response){

        const medicos = await getRepository(Medico).find();

        return res.json(medicos);
    }
    
}
export default new MedicoController();