function json(response) {
  return response.json()
}

class ResumoFicha extends React.Component {
  constructor(){
    super();
    this.state = {
      resumoFichas : []
    }
  }
  componentDidMount() {
      fetch("api/ficha/jogador", { method:"GET", Header : new Headers })
      .then(status)
      .then(json)
      .then(data=>{
        let resumoFichas = data.map((ficha) =>{
          return(
           <div>
            <form action="/ficha-personagem.html" method="post">
              <button className='ficha-sel' name='idFicha' value="2">
                <div className="corpo">
                  <label className='botao-texto' type="submit" id={ficha.idFicha}>
                      <label>Nome:
                  </label>
                  <h3>{ficha.nomePersonagem}</h3>
                  </label>
                  <img src={ficha.img}/>
                </div>
              </button>
            </form><br />
          </div>
          )
        })
        this.setState({resumoFichas:resumoFichas})
      })
  }
  render () {
    return(
      <div>
        {this.state.resumoFichas}
      </div>
    )
  }
}
fetch("api/sistema", {method:"GET", Header : new Headers })
.then(status)
.then(json)
.then(data=>{sessionStorage.setItem("sistema", JSON.stringify(data))})
.then(ReactDOM.render(<ResumoFicha />,document.getElementById('root')))