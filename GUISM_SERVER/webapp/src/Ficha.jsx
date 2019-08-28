class Habitos extends React.Component{
    constructor(props){
        super(props)
        this.state = { habitos : this.props.habitos}
    }
    /*
    var habitosComponemt = props.habitos[0].nomeHabitos
    return (
        <div>
        <h1>Habitos</h1>
        <p>{habitosComponemt}</p>
        </div>
    )*/
    

    componentDidMount(){
        this.setState({habitos : this.props.habitos})
    };
 /*   retornaListaHabitos(){
        console.log(this.state.habitos.map((habito)=> <p>{habito.nomHabito}<p>))
    }*/

    render(){
        
        return <p>{this.props.habitos.map((habito) => <p>{habito.nomeHabito}</p>)}</p>
    }
}

class Ficha extends React.Component{
    constructor(props) {
        super(props)
        console.log(JSON.parse(sessionStorage.getItem("ficha")))
        this.state = {ficha: JSON.parse(sessionStorage.getItem("ficha")) , sistema:JSON.parse(sessionStorage.getItem("sistema"))}
    };
    componentDidMount(){
        this.timerID = setInterval(() => this.tick(),1000);
    };
    
    tick(){
        fetch("api/ficha/id/1", { method: "GET", Header: new Headers })
        .then(status)
        .then(json)
        .then(data => {sessionStorage.setItem("ficha", JSON.stringify(data));this.setState({ ficha : data })})
        
    }

    render() {
        const habitosConst = this.state.ficha.habitos
        return (
            <div>
                <h1>nome: {this.state.ficha.nomePersonagem}</h1>
                <h1>raca: {this.state.ficha.raca.nomeRaca}</h1>
                <Habitos
                habitos = {habitosConst}
                />
            </div>
            )
    }
}

fetch("api/ficha/id/1", { method: "GET", Header: new Headers })
        .then(status)
        .then(json)
        .then(data => {
            sessionStorage.setItem("ficha", JSON.stringify(data))
          
        }).then(
ReactDOM.render(<Ficha />, document.getElementById('ficha')))