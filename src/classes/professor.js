import { Pessoa } from "./pessoa.js";

export class Professor extends Pessoa {
    
    nif = null;

    constructor(nome, idade, nif) {
        super(nome, idade);
        this.nif = nif;
    }

    getNome() {
        return this.nome;
    }

    getIdade() {
        return this.idade;
    }

    getNif() {
        return this.nif;
    }

    setNome(nome) { 
        this.nome = nome;
    }

    setIdade(idade) {
        this.idade = idade;
    }

    setNif(nif) {
        this.nif = nif;
    }

    darAula() {
        console.log(`Professor ${ this.getNome() } em aula`);
    }
}