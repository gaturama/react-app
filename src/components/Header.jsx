function Header() {
    return(
        <div className="container">
            <div className="logo">
                <link to="/" className="nav-link">
                    <image
                        src={require("../assets/images/logo.png")}
                        width={150}
                    />
                </link>
            </div>
            <nav className="navbar">
                <link to="/" className="nav-link">Inicial</link>
                <link to="aluno" className="nav-link">Página do Aluno</link> 
                <link to="professor" className="nav-link">Página do Professor</link>
                <link to="disciplina" className="nav-link">Disciplinas</link>
            </nav>
        </div>
    )
}

export {Header}