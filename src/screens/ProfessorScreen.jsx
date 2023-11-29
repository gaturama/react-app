import styles from "./Global.module.css"

export default function ProfessorScreen() {
    return (
        <div>
            <div className={styles.card}>
                <h2 style={{color: "white"}}>Cadastro de Professores</h2>
                <form>
                    <div className={styles.group}>
                        <label htmlFor="nome">Nome Completo</label>
                        <input type="text" className="form-control" id="nome" />
                    </div>
                    <div className={styles.group}>
                        <label htmlFor="disciplina">Disciplina</label>
                        <input type="text" className="form-control" id="disciplina" />
                    </div>
                    <div className={styles.group}>
                        <label htmlFor="telefone">Telefone</label>
                        <input type="text" className="form-control" id="telefone" />
                    </div>
                    <div className={styles.group}>
                        <input type="submit" className={styles["btn-success"]} />
                    </div>
                </form>
            </div>
        </div>
    )
}