const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'boostMark011',
    database: 'texas'
});

connection.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao MySQL:', err.message);
    } else {
        console.log('Conexão bem-sucedida ao MySQL');
    }
});

app.get('/alunos', (req, res) => {
    connection.query('SELECT * FROM alunos', (err, results) => {
        if (err) {
            res.status(500).json({ error: 'Erro ao obter alunos do banco de dados.' });
        } else {
            res.json(results);
        }
    });
});

app.post('/alunos', (req, res) => {
    const { nome, idade, email, date, telefone } = req.body;
    const query = 'INSERT INTO alunos (nome, idade, email, date, telefone) VALUES (?, ?, ?, ?, ?)';
    connection.query(query, [nome, idade, email, date, telefone], (err, results) => {
        if (err) {
            res.status(500).json({ error: 'Erro ao adicionar aluno ao banco de dados.' });
        } else {
            res.json({ id: results.insertId, nome, idade, email, date, telefone });
        }
    });
});

app.listen(port, () => {
    console.log(`Servidor está rodando em http://localhost:${port}`);
});