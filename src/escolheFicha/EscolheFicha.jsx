import React from 'react'

class EscolheFicha extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            resumoFichas : []
        }
    }

    componentDidMount() {
        this.getSistema();
        this.fetchResumoFichas();
    }
    fetchResumoFichas(){
        fetch("/api/ficha/jogador", { method:"GET", Header : new Headers() })
            .then(response => response.json())
            .then(data=>{
                let resumoFichas = data.map((ficha) =>{
                    return (<div>
                            <form action="" method="GET">
                                <button className='ficha-sel' name='idFicha' value={ficha.idFicha}>
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
                        </div>)
                });
                this.setState({resumoFichas:resumoFichas})
            })
    }
    getSistema(){
        const xhr = new XMLHttpRequest();
        xhr.addEventListener('load', ()=>{sessionStorage.setItem("sistema", xhr.responseText)});
        xhr.open('GET','api/sistema');
        xhr.send();
    }

    render () {
        return(
            <div>
                {this.state.resumoFichas}
            </div>
        )
    }
}
export { EscolheFicha }
