import { Endereco } from './Endereco';
import {Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn} from "typeorm";
import Especialidades from "./Especialidades";


@Entity()
export  default class Medico {

    @PrimaryGeneratedColumn()
	id: number ;
	
	@Column({length:120})
	nome: String ;	
	
	@Column()	
	crm: String ;
	
	@Column()	
	telefoneFixo: String ;
	
	@Column()
	telefoneCelular: String ;	

    @Column(type => Endereco)
    endereco: Endereco;

    @ManyToMany(() => Especialidades)
    @JoinTable()
    especialidade: Especialidades[];
	
}
