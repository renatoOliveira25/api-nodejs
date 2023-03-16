import { Pessoa } from "./pessoa.js";

export class Aluno extends Pessoa {

    matricula = null;

    constructor(nome, idade, matricula) {
        super(nome, idade);
        this.matricula = matricula;
    }

    getNome() {
        return this.nome;
    }

    getIdade() {
        return this.idade;
    }

    getMatricula() {
        return this.matricula;
    }

    setNome(nome) {
        this.nome = nome;
    }

    setIdade(idade) {
        this.idade = idade;
    }

    setMatricula(matricula) {
        this.matricula = matricula;
    }

    assisteAula() {
        console.log(`Aluno ${ this.getNome() } está assistindo aula.`)
    }
}