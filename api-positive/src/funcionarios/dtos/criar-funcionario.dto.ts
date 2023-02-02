import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CriarFuncionarioDto{
    
    @IsEmail() @IsNotEmpty()
    readonly email: string;
    
    @IsNotEmpty() @IsString()
    nome: string;
}