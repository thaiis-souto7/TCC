import { Document } from 'mongoose';

export interface Funcionario extends Document {
    readonly email: string;
    nome: string;
    senha: string;
    cargo: string;
    cargaHoraria: string;
    idade: number;
    nivelAcesso: number;
}