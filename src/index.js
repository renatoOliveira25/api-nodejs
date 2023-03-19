import express from 'express';
import { Aluno } from './classes/aluno.js';
import { Professor } from './classes/professor.js';
import { InicializaProfessores } from './init/init.js'
import { InicializaAlunos } from './init/init.js'

/** 
 * Criando um servidor com a API express
 * e definindo a porta de acesso para 3000 
 * */ 
const server = express();
const port = 3000;

/** 
 * Definindo o uso da biblioteca JSON pelo servidor
 */
server.use(express.json());

/** carrega cadastros de professores e alunos
 * em variaveis (somente para testes)
 * */ 
let professores = new InicializaProfessores;
let alunos = new InicializaAlunos;

/**
 * Rotas HTTP para trabalhar com a classe professore
 */
// listar todos os professores
server.get('/professores', (req, res) => {
    return res.json(professores);
});

// listar apenas um professor
server.get('/professores/:index', (req, res) => {
    const { index } = req.params;

    return res.json(professores[index]);
});

// cadastrar um novo professor
server.post('/professores', (req, res) => {
    const { nome, idade, nif } = req.body;

    const novoProfessor = new Professor(nome, idade, nif);

    professores.push(novoProfessor);

    return res.json(professores);
});

// atualizar um professor
server.put('/professores/:index', (req, res) => {
    const { index } = req.params;
    const { nome, idade } = req.body;

    professores[index].nome = nome;
    professores[index].idade = idade;

    return res.json(professores);
})

// deleta um professor
server.delete('/professores/:index', (req, res) => {
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
server.get('/alunos', (req, res) => {
    return res.json(alunos);
});

// listar apenas um aluno
server.get('/alunos/:index', (req, res) => {
    const { index } = req.params;

    return res.json(alunos[index]);
});

// cadastrar um novo aluno
server.post('/alunos', (req, res) => {
    const { nome, idade, matricula } = req.body;

    const novoAluno = new Aluno(nome, idade, matricula);

    alunos.push(novoAluno);

    return res.json(alunos);
});

// atualizar um aluno
server.put('/alunos/:index', (req, res) => {
    const { index } = req.params;
    const { nome, idade, matricula } = req.body;

    alunos[index].nome = nome;
    alunos[index].idade = idade;
    alunos[index].matricula = matricula;

    return res.json(alunos);
})

// deleta um aluno
server.delete('/alunos/:index', (req, res) => {
    const { index } = req.params;

    if(index <= professores.length) {
        alunos.splice(index, 1);
        return res.json({message : "Cadastro do aluno removido"});
    } else {
        return res.json({message : "Índice não existe"});
    }
});

/**
 * Servidor executando na porta 3000, definida no início do código
 */
server.listen(port, () => {
    console.log(`Aplicação executando em http://localhost:${port}/`);
});