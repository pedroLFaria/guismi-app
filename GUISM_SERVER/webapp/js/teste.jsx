function App() {
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

function buscaFichas() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          console.log(this);
        }
    };
    xmlhttp.open("GET", "api/ficha/jogador", true);
    xmlhttp.send();
}
ReactDOM.render(
<App />,
document.getElementById('root')
);