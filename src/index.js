import express from 'express';
import { Aluno } from './classes/aluno.js';
import { Professor } from './classes/professor.js';
const server = express();
const port = 3000;

server.use(express.json());

//let p1 = new Professor('Renato Oliveira', 33);
//let p2 = new Professor('José Mateus', 38);

let professores = [];
let alunos = [];

// Rota professores
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

// Rota alunos
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

server.listen(port, () => {
    console.log(`Aplicação executando em http://localhost:${port}/`);
});