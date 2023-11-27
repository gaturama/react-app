export default function DisciplinaScreen() {
    return(
        <>
            <div className="container-2">
                <div className="row-2">
                    <div className="col-2">
                        <h2>Cadastro de Disciplinas</h2>
                    </div>
                    <form>
                        <div className="form-group">
                            <label htmlFor="disciplina">Disciplina</label>
                            <input type="text" className="form-control" id="disciplina" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="nome">Carga horária</label>
                            <input type="text" className="form-control" id="carga-horaria"/>
                        </div>
                        <div className="form-group">
                            <label>Enviar</label>
                            <input type="submit" className="btn-success"/>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}