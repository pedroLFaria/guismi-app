function resumoFicha(prop) {
  return (
    <div>
      <form action="/ficha-personagem.html" method="post">
        <button className='ficha-sel' name='idFicha' value="2">
          <div className="corpo">
            <label className='botao-texto' type="submit" id='1'>
                <label>Nome: 
            </label>
            <h3>"PERSONAGEM HIPOTETICO 1"</h3>
            </label>
            <img src="https://i.imgur.com/frA5HIW.jpg"/>
          </div>
        </button>
      </form><br />
    </div>
  );
}


function status(response) {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response)
  } else {
    return Promise.reject(new Error(response.statusText))
  }
}

function json(response) {
  return response.json()
}

class Background extends React.Component {
  constructor(){
    super();
    this.state = {
      pictures : []
    }
  }
  componentDidMount() {
  fetch("api/ficha/jogador", { method:"GET", Header : new Headers })
  .then(status)
  .then(json)
  .then(data=>{
    let resumoFicha = data.map((ficha) =>{
      console.log(ficha)
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
              <img src={this.img}/>
            </div>
          </button>
        </form><br />
      </div>
      )
    })
    this.setState({pictures:resumoFicha})
    console.log("state: ", resumoFicha)
  })
  }
  render () {
    return(
      <div>
        {this.state.pictures}
      </div>
    )
  }
}
  /*
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

);*/

ReactDOM.render(
  <Background />,
  document.getElementById('root'))