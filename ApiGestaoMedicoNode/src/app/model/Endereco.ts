import { Column } from "typeorm";


export class Endereco {

    @Column()
	logradouro: String ;
	
	@Column()
	complemento: String ;	
	
	@Column()	
	cep: String;
	
	@Column()
	bairro: String ;
	
	@Column()
	localidade: String;
	
	@Column()
	uf: String ;

   
}

