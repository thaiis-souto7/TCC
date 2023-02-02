import { IsNotEmpty, IsString } from "class-validator";

export class AtualizarFuncionarioDto{
    
    @IsNotEmpty() @IsString()
    nome: string;
}