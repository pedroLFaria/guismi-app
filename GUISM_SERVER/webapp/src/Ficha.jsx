class Habitos extends React.Component{
    render(){
        return (<table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th>HABITOS</th>
                            <th>Quantidade</th>
                            <th>Dividido Por 5</th>
                            <th>Dividido Por 10</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.habitos.map((habito) => 
                        <tr>
                            <td>{habito.nomeHabito}</td>
                            <td>{habito.qtdFichaHabito}</td>
                            <td>{habito.qtdFichaHabito/5}</td>
                            <td>{habito.qtdFichaHabito/10}</td>
                        </tr>)} 
                    </tbody>
                </table>)
    }
}

class Raca extends React.Component{
    constructor(props){
        super(props)
        this.state = {
                    ficha : this.props.ficha,
                    racas : this.props.sistema.racas,
                    value : this.props.ficha.idRaca
                    };
    this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({value: event.target.value});
        this.state.ficha.idRaca = Number(this.state.value);
        console.log(this.state.ficha)
    }
    render(){
        return(
            <select value={this.state.value } onChange={this.handleChange}>
                {this.state.racas.map((raca) => <option value={raca.idRaca}>{raca.nomeRaca}</option>)}
            </select>
        )
    }
}

class Ficha extends React.Component{
    constructor(props) {
        super(props)
        this.state = { ficha : JSON.parse(sessionStorage.getItem("ficha")) , sistema:JSON.parse(sessionStorage.getItem("sistema"))}
    };
    componentDidMount(){
        this.timerID = setInterval(() => this.tick(),1000);
    };
    
    tick(){
        fetch("api/ficha/id/1", { method: "GET", Header: new Headers })
        .then(status)
        .then(response => response.json())
        .then(data => {sessionStorage.setItem("ficha", JSON.stringify(data));this.setState({ ficha : data })})        
    }

    render() {
        const ficha = this.state.ficha
        const sistema = this.state.sistema
        const habitosConst = this.state.ficha.habitos
        return (
            <fieldset className="scheduler-border form-group row">
                <legend className="scheduler-border">Personagem </legend>
                <div className="row">
                    <div className="row col-md-12">
                        <div className="col-md-2 inline">
                            <span>Nome</span><br/>
                            <label for="nome_pers_input" onDblClick="modalTextBox(this)" id="nome_pers">{this.state.ficha.nomePersonagem}</label>
                            <input type="text" className="c form-control"  placeholder="" id="nome_pers_input"/>
                        </div>
                        <div className="col-md-2">
                             <span>Raça </span>
                             <Raca
                             ficha = {ficha}
                             sistema = {sistema} />
                         </div>
                    </div>
                    <Habitos
                    habitos = {habitosConst}
                    />
                </div>
            </fieldset>
            )
    }
}

fetch("api/ficha/id/1", { method: "GET", Header: new Headers })
        .then(status)
        .then(response => response.json())
        .then(data => {sessionStorage.setItem("ficha", JSON.stringify(data))})
        .then(ReactDOM.render(<Ficha />, document.getElementById('telaPersonagem')))