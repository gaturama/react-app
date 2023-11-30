import { useState } from "react"
import styles from "../css/Global.module.css"

export default function DisciplinaScreen() {
    const [formData, setFormData] = useState({
        disciplina: "",
        cargaHoraria: "",
    })

    const [cadastrado, setCadastrado] = useState(false)
    const [editMode, setEditMode] = useState(false)

    const handleChange = (e) => {
        const { id, value } = e.target
        setFormData((prevData) => ({
            ...prevData,
            [id]: value
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
            disciplina: "",
            cargaHoraria: "",
        })
    }

    const handleDelete = () => {
        setCadastrado(false)
        setEditMode(false)
        setFormData({
            disciplina: "",
            cargaHoraria: "",
        })
    }

    return (
        <div>
            {cadastrado ? (
                <div className={`${styles.card} ${styles.cadastrado}`}>
                    <h2 style={{ color: "white" }}>
                        {editMode ? "Editar Disciplina" : "Informações da Disciplina Cadastrada"}
                    </h2>
                    {editMode ? (
                        <form>
                            <div className={styles.group}>
                                <label htmlFor="disciplina">Disciplina </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="disciplina"
                                    value={formData.disciplina}
                                />
                            </div>
                            <div className={styles.group}>
                                <label htmlFor="cargaHoraria">cargaHoraria</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="cargaHoraria"
                                    value={formData.cargaHoraria}
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
                            <p>Disciplina: {formData.disciplina}</p>
                            <p>Carga Horária: {formData.cargaHoraria}</p>
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
                    <h2 style={{ color: "white" }}>Cadastro de Disciplinas</h2>
                    <form onSubmit={handleSubmit}>
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
                            <label htmlFor="cargaHoraria">Carga horária</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="cargaHoraria" 
                                value={formData.cargaHoraria}
                                onChange={handleChange} 
                            />
                        </div>
                        <div className={styles.group}>
                            <input type="submit" className={styles["btn-success"]} />
                        </div>
                    </form>
                </div>
            )}
        </div >
    )
}