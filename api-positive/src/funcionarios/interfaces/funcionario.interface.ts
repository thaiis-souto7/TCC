export interface Funcionario {
    readonly _id: number;
    readonly email: string;
    nome: string;
    senha: string;
    cargo: string;
    cargaHoraria: string;
    idade: number;
    nívelAcesso: number;
}