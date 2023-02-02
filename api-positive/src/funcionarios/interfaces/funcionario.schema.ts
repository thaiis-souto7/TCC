import * as mongoose from 'mongoose';

export const FuncionarioSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    nome: { type: String, required: true },
    senha: { type: String, required: true },
    cargo: { type: String },
    cragaHoraria: { type: String },
    idade: { type: Number },
    nivelAcesso: { type: Number, required: true }
}, { timestamps: true, collection: 'funcionarios' });