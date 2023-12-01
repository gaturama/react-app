import React, { useState } from 'react'
import Alert  from 'react-bootstrap/Alert'

export default function LoginScreen(){

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [msg, setMsg] = useState('')
  const validForm = () => {
    if(email === ''){
      setMsg('Preencha o campo de e-mail')
      return false
    }
    if(password ===''){
      setMsg('Preencha o campo de senha')
      return false
    }
    setMsg('')


    return true
  }

  return(
    <>
        <div className="container-1">
        <div className="row-1">
          <div className="col-1">
            <h1>Login</h1>
            <p>Bem vindo a Texas School</p>
          </div>
          <div className="col-2">
            <div className="col-3">
              <form action="" method="post">
                <div className="form">
                  <div className="form-login">
                    <label for="nome">Insira seu e-mail</label>
                    <input 
                      type="text"
                      placeholder='abc@email.com' 
                      className="form-control" 
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value)
                      }}
                      id="email" 
                    />
                  </div>
                  <div className="form-login">
                    <label for="senha">Senha</label>
                    <input 
                      type="password" 
                      className="form-control" 
                      placeholder='********'
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value)
                      }}
                      id="password" 
                    />
                  </div>
                  <div className="form-login">
                    <input 
                      type="submit" 
                      className="btn-success" 
                      value="Entrar" 
                      onClick={validForm
                        ? () => {
                          alert('Login realizado com sucesso')
                        }
                        : () => {
                          alert('Erro ao realizar login')
                        }
                      }
                   
                    />
                    <div className='row mt-3'>
                      <Alert variant='warning'>
                        {msg}
                      </Alert>
                    </div>
                  </div>
                  <div className="cadusuario">
                    <a href="/cadastro">Cadastre-se</a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}