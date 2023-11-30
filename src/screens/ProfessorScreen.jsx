import { useState } from "react"
import styles from "../css/Global.module.css"

export default function ProfessorScreen() {
    const [formData, setFormData] = useState({
        nome: "",
        disciplina: "",
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

    const handleSubmit = (e) => {
        e.preventDefault()

        setCadastrado(true)
    }

    const handleEdit = () => {
        setEditMode(true)
    }

    const handleUpdate = () => {
        setCadastrado(true)
        setEditMode(false)
    }

    const handleCancel = () => {
        setEditMode(false)
        setFormData({
            nome: "",
            disciplina: "",
            telefone: "",
        })
    }

    const handleDelete = () => {
        setCadastrado(false)
        setEditMode(false)
        setFormData({
            nome: "",
            disciplina: "",
            telefone: "",
        })
    }

    return (
        <div>
            {cadastrado ? (
                <div className={`${styles.card} ${styles.cadastrado}`}>
                    <h2 style={{ color: "white" }}>
                        {editMode ? "Editar Aluno" : "Informações do Professor Cadastrado"}
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
                                <label htmlFor="disciplina">Disciplina </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="disciplina"
                                    value={formData.disciplina}
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
                            <p>Disciplina: {formData.disciplina}</p>
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
                    <h2 style={{ color: "white" }}>Cadastro de Professores</h2>
                    <form onSubmit={handleSubmit}>
                        <div className={styles.group}>
                            <label htmlFor="nome">Nome Completo</label>
                            <input
                                type="text"
                                className="form-control"
                                id="nome"
                                value={formData.nome}
                                onChange={handleChange}
                            />
                        </div>
                        <div className={styles.group}>
                            <label htmlFor="disciplina">Disciplina</label>
                            <input
                                type="text"
                                className="form-control"
                                id="disciplina"
                                value={formData.disciplina}
                                onChange={handleChange}
                            />
                        </div>
                        <div className={styles.group}>
                            <label htmlFor="telefone">Telefone</label>
                            <input
                                type="text"
                                className="form-control"
                                id="telefone"
                                value={formData.telefone}
                                onChange={handleChange}
                            />
                        </div>
                        <div className={styles.group}>
                            <input type="submit" className={styles["btn-success"]} />
                        </div>
                    </form>
                </div>
            )}
        </div>
    )
}