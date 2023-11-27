export default function ProfessorScreen() {
    return(
        <>
            <div className="container-2">
                <div className="row-2">
                    <div className="col-2">
                        <h2>Cadastro de Professores</h2>
                    </div>
                    <form>
                        <div className="form-group">
                            <label for="nome">Nome Completo</label>
                            <input type="text" className="form-control" id="nome"/>
                        </div>
                        <div className="form-group">
                            <label for="disciplina">Disciplina</label>
                            <input type="text" className="form-control" id="disciplina" />
                        </div>
                        <div className="form-group">
                            <label for="telefone">Telefone</label>
                            <input type="text" className="form-control" id="telefone"/>
                        </div>
                        <div className="form-group">
                            <input type="submit" className="btn-success"/>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}