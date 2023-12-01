import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomeScreen from './../screens/HomeScreen'
import AlunoScreen from './../screens/AlunoScreen'
import DisciplinaScreen from './../screens/DisciplinaScreen'
import ProfessorScreen from './../screens/ProfessorScreen'
import { Container } from "react-bootstrap"
import LoginScreen from './../screens/LoginScreen';

export default function RootNavegation() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeScreen />}/>
                <Route path="/login" element={<LoginScreen />}/>
                <Route path="/aluno" element={<AlunoScreen />}/>
                <Route path="/disciplina" element={<DisciplinaScreen />}/>
                <Route path="/professor" element={<ProfessorScreen />}/>
            </Routes>
        </BrowserRouter>
    );
}

function error() {
    return (
       <Container>
            <h1>Error 404</h1>
            <p>Foi mal meu velho! A página não foi encontrada.</p>
       </Container>
    );
}