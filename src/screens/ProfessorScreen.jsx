export default function ProfessorScreen() {
    return(
        <>
            <div className="container-prof">
                <div className="row-2">
                    <div className="col-2">
                        <h2>Cadastro de Professores</h2>
                    </div>
                    <form>
                        <div className="form-group">
                            <label htmlFor="nome">Nome Completo</label>
                            <input type="text" className="form-control" id="nome"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="disciplina">Disciplina</label>
                            <input type="text" className="form-control" id="disciplina" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="telefone">Telefone</label>
                            <input type="text" className="form-control" id="telefone"/>
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