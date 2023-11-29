import styles from "./Aluno.module.css"

export default function AlunoScreen() {
    return (
        <header>
            <body>
                <div className={styles.aluno}>
                    <div className="row">
                        <div className="col">
                            <h2>Cadastro de Alunos</h2>
                        </div>
                        <form>
                            <div className={styles.group}>
                                <label htmlFor="nome">Nome Completo </label>
                                <input type="text" className="form-control" id="nome" />
                            </div>
                            <div className={styles.group}>
                                <label htmlFor="idade">Idade </label>
                                <input type="number" className="form-control" id="idade" />
                            </div>
                            <div className={styles.group}>
                                <label htmlFor="email">E-mail </label>
                                <input type="email" className="form-control" id="email" />
                            </div>
                            <div className={styles.group}>
                                <label htmlFor="date">Data de Nascimento </label>
                                <input type="date" className="form-control" id="date" />
                            </div>
                            <div className={styles.group}>
                                <label htmlFor="telefone">Telefone </label>
                                <input type="text" className="form-control" id="telefone" />
                            </div>
                            <div className={styles.group}>
                                <input type="submit" className="btn-success" />
                            </div>
                        </form>
                    </div>
                </div>
            </body>
        </header>
    )
}