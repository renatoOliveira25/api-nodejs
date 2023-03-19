import { Aluno } from "../classes/aluno.js";
import { Professor } from "../classes/professor.js";
import jsonProfessores from "../../json/professores.json" assert {type: 'json'}
import jsonAlunos from "../../json/alunos.json" assert {type: 'json'}

let professores = [];
let alunos = [];

export class InicializaProfessores {

    constructor() {
        professores = new Professor();
        professores = jsonProfessores;
        return professores;
    }
}

export class InicializaAlunos {

    constructor() {
        alunos = new Aluno();
        alunos = jsonAlunos;
        return alunos;
    }
}

