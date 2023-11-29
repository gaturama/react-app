import styles from "./Global.module.css"

export default function AlunoScreen() {
    return (
        <div>
            <div className={styles.card}>
                <h2 style={{color: "white"}}>Cadastro de Alunos</h2>
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
                        <input type="submit" className={styles["btn-success"]} />
                    </div>
                </form>
            </div>
        </div>
    )
}