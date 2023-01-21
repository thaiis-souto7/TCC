import { Injectable, Logger } from '@nestjs/common';
import { CriarFuncionarioDto } from './dtos/criar-funcionario.dto';
import { Funcionario } from './interfaces/funcionario.interface';


@Injectable()
export class FuncionariosService {

private readonly logger = new Logger(FuncionariosService.name);
private funcionarios: Funcionario[] = [];

    async createUpdateFunc(criarFuncionarioDto: CriarFuncionarioDto): Promise<void> {
        const { email } = criarFuncionarioDto;

        const funcionarioEncontrado = this.funcionarios.find(funcionarios => funcionarios.email === email);
        if(funcionarioEncontrado) {
            await this.updateFunc(funcionarioEncontrado, criarFuncionarioDto)
        } else {
            await this.create(criarFuncionarioDto);
        }   
    }

    private create(criaFuncionarioDto: CriarFuncionarioDto): void {
        const { nome, email } = criaFuncionarioDto;
        const funcionario: Funcionario = {
            _id: 1,
            nome,
            email,
            senha: "123456",
            cargo: "Desenvolvedor",
            cargaHoraria: "8 horas",
            idade: 20,
            nívelAcesso: 1
        }
        this.logger.log(`criarFuncionarioDto: ${JSON.stringify(funcionario)}`);
        this.funcionarios.push(funcionario);
    }

    async getAllFunc(): Promise<Funcionario[]> {
        return await this.funcionarios;
    }
    
    async getFuncByEmail(email: string): Promise<Funcionario> {
        const jogadorEncontrado = this.funcionarios.find(funcionarios => funcionarios.email === email);
        if(!jogadorEncontrado){
            throw new Error('Jogador não encontrado');
        }
        return jogadorEncontrado;
    }

    private updateFunc(funcionarioEncontrado: Funcionario, criaFuncionarioDto: CriarFuncionarioDto): void {
        const { nome } = criaFuncionarioDto;
        funcionarioEncontrado.nome = nome;
    }

    async deleteFunc(email: string): Promise<void> {
        const funcionarioEncontrado = this.funcionarios.find(funcionarios => funcionarios.email === email);
        if(!funcionarioEncontrado){
            throw new Error('Funcionário não encontrado');
        }
        this.funcionarios = this.funcionarios.filter(funcionarios => funcionarios.email !== funcionarioEncontrado.email);
    }

}
