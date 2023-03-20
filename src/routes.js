import express from 'express';

import { InicializaProfessores } from './init/init.js'
import { InicializaAlunos } from './init/init.js'

const router = express.Router();

/** carrega cadastros de professores e alunos
 * em variaveis (somente para testes)
 * */ 
let professores = new InicializaProfessores;
let alunos = new InicializaAlunos;

/**
 * Rotas HTTP para trabalhar com a classe professore
 */
// listar todos os professores
router.get('/professores', (req, res) => {
    return res.json(professores);
});

// listar apenas um professor, passando o índice
router.get('/professores/:index', (req, res) => {
    const { index } = req.params;

    return res.json(professores[index]);
});

// cadastrar um novo professor
router.post('/professores', (req, res) => {
    const { nome, idade, nif } = req.body;

    const novoProfessor = new Professor(nome, idade, nif);

    professores.push(novoProfessor);

    return res.json(professores);
});

// atualizar um professor, passando o índice
router.put('/professores/:index', (req, res) => {
    const { index } = req.params;
    const { nome, idade } = req.body;

    professores[index].nome = nome;
    professores[index].idade = idade;

    return res.json(professores);
})

// deleta um professor, passando o índice
router.delete('/professores/:index', (req, res) => {
    const { index } = req.params;

    if(index <= professores.length) {
        professores.splice(index, 1);
        return res.json({message : "Cadastro do professor removido"});
    } else {
        return res.json({message : "Índice não existe"});
    }
});

/**
 * Rotas HTTP para trabalhar com a classe aluno
 */
// listar todos os alunos
router.get('/alunos', (req, res) => {
    return res.json(alunos);
});

// listar apenas um aluno, passando o índice
router.get('/alunos/:index', (req, res) => {
    const { index } = req.params;

    return res.json(alunos[index]);
});

// cadastrar um novo aluno
router.post('/alunos', (req, res) => {
    const { nome, idade, matricula } = req.body;

    const novoAluno = new Aluno(nome, idade, matricula);

    alunos.push(novoAluno);

    return res.json(alunos);
});

// atualizar um aluno, passando o índice
router.put('/alunos/:index', (req, res) => {
    const { index } = req.params;
    const { nome, idade, matricula } = req.body;

    alunos[index].nome = nome;
    alunos[index].idade = idade;
    alunos[index].matricula = matricula;

    return res.json(alunos);
})

// deleta um aluno, passando o índice
router.delete('/alunos/:index', (req, res) => {
    const { index } = req.params;

    if(index <= professores.length) {
        alunos.splice(index, 1);
        return res.json({message : "Cadastro do aluno removido"});
    } else {
        return res.json({message : "Índice não existe"});
    }
});

export { router };