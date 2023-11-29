import styles from "./Global.module.css"

export default function DisciplinaScreen() {
    return (
        <div>
            <div className={styles.card}>
                <h2 style={{color: "white"}}>Cadastro de Disciplinas</h2>
                <form>
                    <div className={styles.group}>
                        <label htmlFor="disciplina">Disciplina</label>
                        <input type="text" className="form-control" id="disciplina" />
                    </div>
                    <div className={styles.group}>
                        <label htmlFor="nome">Carga horária</label>
                        <input type="text" className="form-control" id="carga-horaria" />
                    </div>
                    <div className={styles.group}>
                        <input type="submit" className={styles["btn-success"]} />
                    </div>
                </form>
            </div>
        </div>
    )
}