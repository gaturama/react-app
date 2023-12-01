import { useState } from "react"
import styles from "../css/Global.module.css"
import { useAlunos } from "../routes/Context"

export default function AlunoScreen() {
    const { adicionarAluno, atualizarAluno, excluirAluno } = useAlunos()
    const [formData, setFormData] = useState({
        nome: "",
        idade: "",
        email: "",
        date: "",
        telefone: "",
    })

    const [cadastrado, setCadastrado] = useState(false)
    const [editMode, setEditMode] = useState(false)

    const handleChange = (e) => {
        const { id, value } = e.target
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (editMode) {
            await atualizarAluno(formData);
            setCadastrado(true);
            setEditMode(false);
        } else {
            adicionarAluno(formData);
            setCadastrado(true);
        }
    }

    const handleEdit = () => {
        setEditMode(true);
    };

    const handleUpdate = async () => {
        await atualizarAluno(formData)
        setCadastrado(true)
        setEditMode(false)
    }

    const handleCancel = () => {
        setEditMode(false)
        setFormData({
            nome: "",
            idade: "",
            email: "",
            date: "",
            telefone: "",
        })
    }

    const handleDelete = async () => {
        await excluirAluno(formData.id)
        setCadastrado(false)
        setEditMode(false)
        setFormData({
            nome: "",
            idade: "",
            email: "",
            date: "",
            telefone: "",
        })
    }

    return (
        <div>
            {cadastrado ? (
                <div className={`${styles.card} ${styles.cadastrado}`}>
                    <h2 style={{ color: "white" }}>
                        {editMode ? "Editar Aluno" : "Informações do Aluno Cadastrado"}
                    </h2>
                    {editMode ? (
                        <form>
                            <div className={styles.group}>
                                <label htmlFor="nome">Nome Completo </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="nome"
                                    value={formData.nome}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className={styles.group}>
                                <label htmlFor="idade">Idade </label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="idade"
                                    value={formData.idade}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className={styles.group}>
                                <label htmlFor="email">E-mail </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className={styles.group}>
                                <label htmlFor="date">Data de Nascimento </label>
                                <input
                                    type="date"
                                    className="form-control"
                                    id="date"
                                    value={formData.date}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className={styles.group}>
                                <label htmlFor="telefone">Telefone </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="telefone"
                                    value={formData.telefone}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className={styles.group}>
                                <button type="button" className={styles["btn-success"]} onClick={handleUpdate}>
                                    Atualizar
                                </button>
                                <button type="button" className={styles["btn-secondary"]} onClick={handleCancel}>
                                    Cancelar
                                </button>
                                <button type="button" className={styles["btn-danger"]} onClick={handleDelete}>
                                    Excluir
                                </button>
                            </div>
                        </form>

                    ) : (
                        <>
                            <p>Nome: {formData.nome}</p>
                            <p>Idade: {formData.idade}</p>
                            <p>E-mail: {formData.email}</p>
                            <p>Data de Nascimento: {formData.date}</p>
                            <p>Telefone: {formData.telefone}</p>
                            <div className={styles.group}>
                                <button type="button" className={styles["btn-success"]} onClick={handleEdit}>
                                    Editar
                                </button>
                                <button type="button" className={styles["btn-danger"]} onClick={handleDelete}>
                                    Excluir
                                </button>
                            </div>
                        </>
                    )}
                </div>
            ) : (
                <div className={styles.card}>
                    <h2 style={{ color: "white" }}>Cadastro de Alunos</h2>
                    <form onSubmit={handleSubmit}>
                        <div className={styles.group}>
                            <label htmlFor="nome">Nome Completo </label>
                            <input
                                type="text"
                                className="form-control"
                                id="nome"
                                value={formData.nome}
                                onChange={handleChange}
                            />
                        </div>
                        <div className={styles.group}>
                            <label htmlFor="idade">Idade </label>
                            <input
                                type="number"
                                className="form-control"
                                id="idade"
                                value={formData.idade}
                                onChange={handleChange}
                            />
                        </div>
                        <div className={styles.group}>
                            <label htmlFor="email">E-mail </label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className={styles.group}>
                            <label htmlFor="date">Data de Nascimento </label>
                            <input
                                type="date"
                                className="form-control"
                                id="date"
                                value={formData.date}
                                onChange={handleChange}
                            />
                        </div>
                        <div className={styles.group}>
                            <label htmlFor="telefone">Telefone </label>
                            <input
                                type="text"
                                className="form-control"
                                id="telefone"
                                value={formData.telefone}
                                onChange={handleChange}
                            />
                        </div>
                        <div className={styles.group}>
                            <button type="submit" className={styles["btn-success"]}>
                                {editMode ? "Atualizar" : "Cadastrar"}
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </div>

    )
}