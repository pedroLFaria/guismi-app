import React from 'react'
import queryString from 'query-string'

class FichaPersonagem extends React.Component {
    constructor(props) {
        super(props);
        this.tick()
        this.state = {
            ficha: { caminhos: [], descendencias: [], habilidades: [], habitos: [], idiomas: [], inventarios: [], patronos: [], raca: {}, situacoes: [] },
            sistema: JSON.parse(sessionStorage.getItem("sistema"))
        };
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 3000);
    };

    tick() {
        fetch("api/ficha/id/" + queryString.parse(window.location.href.split("?")[1]).idFicha, { method: "GET", Header: new Headers })
            .then(response => response.json())
            .then(data => {
                sessionStorage.setItem("ficha", JSON.stringify(data));
                this.setState({ ficha: data })
            })
    }
    render() {
        const ficha = this.state.ficha;
        const sistema = this.state.sistema;
        return (<div>
            <fieldset className="scheduler-border form-group row">
                <legend className="scheduler-border">Personagem</legend>
                <div className="row">
                    { /* <div className="row col-md-12">
                        <div className="col-md-2 inline">
                            <span>Nome</span>
                            <Nome
                                ficha={ficha}
                                sistema={sistema}
                            />
                        </div>
                        <div className="col-md-2">
                            <span>Raça</span>
                            <Raca
                                ficha={ficha}
                                sistema={sistema} />
        </div>
                        <div className="col-md-2">
                            <span>Caminho</span>
                            <Caminho
                                ficha={ficha}
                                sistema={sistema}
                            />
        </div>
                    </div>
                    <Habitos
                        ficha={ficha}
                        sistema={sistema}
                    />*/}
                </div>
            </fieldset>
        </div>)

    }
}
export { FichaPersonagem }
