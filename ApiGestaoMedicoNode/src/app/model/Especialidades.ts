import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
class Especialidades {

    @PrimaryGeneratedColumn()
	id: number;
	
	@Column()
	especialidades: String;	
		
}

export default Especialidades;
