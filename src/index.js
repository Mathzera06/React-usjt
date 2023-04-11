import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import Pedido from './Pedido'
import Cartao from './Cartao'

const App = () => {
  return (
    <div className="container border rounded mt-2">
      <div className="row">
        <div className="col-12">
          <h1 className="display-5 text-center">Seus pedidos</h1>
        </div>
      </div>
      <div className="row">
        {/* mobile first */}
        {/* .col-12.col-lg-6.col-xl-4 */}
        <div className="col-12 col-lg-6 col-xxl-4 my-2">
          {/* .card>.card-header.text-muted{22/04/2022} */}
          <Cartao cabecalho="22/04/2021">
            <Pedido icone="fa-solid fa-shake fa-hard-drive fa-2x"
            titulo="SSD" descricao="SSD Kingston A400 -"/>
          </Cartao>
        </div>
        <div className="col-12 col-lg-6 col-xxl-4 my-2">
          <Cartao cabecalho="20/10/2021">
            <Pedido icone="fa-solid fa-shake fa-book fa-2x" titulo="Livro" descricao="Harry Potter"/>
          </Cartao>
        </div>
        
        <div className="col-12 col-lg-6 col-xxl-4 my-2">
          <Cartao cabecalho="12/02/2023">
            <Pedido icone="fa-solid fa-shake fa-laptop fa-2x" titulo="pc do matheus" descricao="high elo no valorant"/>
          </Cartao>
        </div>

      </div>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)