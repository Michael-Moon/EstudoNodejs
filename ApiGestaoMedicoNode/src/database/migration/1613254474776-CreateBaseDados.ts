import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateBaseDados1613254474776 implements MigrationInterface {
    name = 'CreateBaseDados1613254474776'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `especialidades` (`id` int NOT NULL AUTO_INCREMENT, `especialidades` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `medico` (`id` int NOT NULL AUTO_INCREMENT, `nome` varchar(120) NOT NULL, `crm` varchar(255) NOT NULL, `telefoneFixo` varchar(255) NOT NULL, `telefoneCelular` varchar(255) NOT NULL, `enderecoLogradouro` varchar(255) NOT NULL, `enderecoComplemento` varchar(255) NOT NULL, `enderecoCep` varchar(255) NOT NULL, `enderecoBairro` varchar(255) NOT NULL, `enderecoLocalidade` varchar(255) NOT NULL, `enderecoUf` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `medico_especialidade_especialidades` (`medicoId` int NOT NULL, `especialidadesId` int NOT NULL, INDEX `IDX_7f48dcd4eea3ba7d6b0baaa87b` (`medicoId`), INDEX `IDX_43d82e58e50f4f3a5ab129fc21` (`especialidadesId`), PRIMARY KEY (`medicoId`, `especialidadesId`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `medico_especialidade_especialidades` ADD CONSTRAINT `FK_7f48dcd4eea3ba7d6b0baaa87b4` FOREIGN KEY (`medicoId`) REFERENCES `medico`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `medico_especialidade_especialidades` ADD CONSTRAINT `FK_43d82e58e50f4f3a5ab129fc210` FOREIGN KEY (`especialidadesId`) REFERENCES `especialidades`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `medico_especialidade_especialidades` DROP FOREIGN KEY `FK_43d82e58e50f4f3a5ab129fc210`");
        await queryRunner.query("ALTER TABLE `medico_especialidade_especialidades` DROP FOREIGN KEY `FK_7f48dcd4eea3ba7d6b0baaa87b4`");
        await queryRunner.query("DROP INDEX `IDX_43d82e58e50f4f3a5ab129fc21` ON `medico_especialidade_especialidades`");
        await queryRunner.query("DROP INDEX `IDX_7f48dcd4eea3ba7d6b0baaa87b` ON `medico_especialidade_especialidades`");
        await queryRunner.query("DROP TABLE `medico_especialidade_especialidades`");
        await queryRunner.query("DROP TABLE `medico`");
        await queryRunner.query("DROP TABLE `especialidades`");
    }

}
