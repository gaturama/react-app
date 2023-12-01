import { createContext, useContext, useState } from "react";

const AlunosContext = createContext();

export const useAlunos = () => {
    const context = useContext(AlunosContext);
    if (!context) {
        throw new Error('useAlunos must be used within a AlunosProvider');
    }
    return context;
};

export const AlunosProvider = ({ children }) => {
    const [alunos, setAlunos] = useState([]);

    const adicionarAluno = (aluno) => {
        setAlunos([...alunos, aluno]);
    };

    const atualizarAluno = (alunoAtualizado) => {
        setAlunos((prevAlunos) =>
            prevAlunos.map((aluno) =>
                aluno.id === alunoAtualizado.id ? alunoAtualizado : aluno
            )
        );
    };

    const excluirAluno = (alunoId) => {
        setAlunos((prevAlunos) =>
            prevAlunos.filter((aluno) => aluno.id !== alunoId)
        );
    };

    return (
        <AlunosContext.Provider value={{ alunos, adicionarAluno,  atualizarAluno, excluirAluno }}>
            {children}
        </AlunosContext.Provider>
    );
};