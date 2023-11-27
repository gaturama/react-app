export default function AlunoScreen() {
    return(
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2>Cadastro de Alunos</h2>
                    </div>
                    <form>
                        <div className="form-group">
                            <label htmlFor="nome">Nome Completo</label>
                            <input type="text" className="form-control" id="nome"/>
                        </div>
                        <div className="form-group">
                            <label for="idade">Idade</label>
                            <input type="number" className="form-control" id="idade"/>
                        </div>
                        <div className="form-group">
                            <label for="email">E-mail</label>
                            <input type="email" className="form-control" id="email"/>
                        </div>
                        <div className="form-group">
                            <label for="date">Data de Nascimento</label>
                            <input type="date" className="form-control" id="date"/>
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