import React from "react";
import styles from '../css/Global.module.css';
import { useAlunos } from "../routes/Context";

const AlunoCard = ({ aluno }) => {
    return (
        <div className={`${styles.card} ${styles.listaCard}`}>
            <h2 style={{ color: 'white '}}>{aluno.nome}</h2>
            <p>Idade: {aluno.idade}</p>
            <p>E-mail: {aluno.email}</p>
            <p>Data de Nascimento: {aluno.date}</p>
            <p>Telefone: {aluno.telefone}</p>
        </div>
    );
};

const ListaAlunos = ({}) => {
    const { alunos } = useAlunos();
    
    return (
        <div>
            <h2 style={{ color: 'white' }}>Lista de Alunos</h2>
            {alunos.map((aluno) => (
                <AlunoCard key={aluno.id} aluno={aluno} />
            ))}
        </div>
    );
};

export default ListaAlunos;