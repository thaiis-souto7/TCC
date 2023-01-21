import { Controller, Post, Body, Get, Query, Delete } from '@nestjs/common';
import { CriarFuncionarioDto } from './dtos/criar-funcionario.dto';
import { FuncionariosService } from './funcionarios.service';
import { Funcionario } from './interfaces/funcionario.interface';

@Controller('api/funcionarios')

export class FuncionariosController {

    constructor(private readonly funcionario : FuncionariosService) {}

    @Post()
    async createUpdateFunc( @Body() criarFuncionarioDto: CriarFuncionarioDto ){
        await this.funcionario.createUpdateFunc(criarFuncionarioDto);
    }

    @Get()
    async getFunc(@Query('email') email: string): Promise<Funcionario[] | Funcionario> {
        if(email){
            return await this.funcionario.getFuncByEmail(email);
        } else {
            return await this.funcionario.getAllFunc();
        }
    }

    @Delete()
    async deleteFunc(@Query('email') email: string): Promise<void> {
        await this.funcionario.deleteFunc(email);
    }

}
