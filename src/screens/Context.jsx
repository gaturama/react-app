import { createContext, useContext, useState } from "react";

const AlunosContext = createContext();

export const useAlunos = () =>  {
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

    return (
        <AlunosContext.Provider value={{ alunos, adicionarAluno }}>
          {children}
        </AlunosContext.Provider>
      );
};