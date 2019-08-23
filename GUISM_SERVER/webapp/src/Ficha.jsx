class Raca extends React.component{
    constructor(props){
        super(props)
        this.state = {
            racas : props.racas
        }
    }
}
class Ficha extends React.Component{
    constructor(props) {
        super(props)
        this.state = {ficha:{
            raca:{},
            caminhos:{},
            descendencias:{},
            habilidades:{},
            habitos:{},
            idiomas:{}
        }, sistema:JSON.parse(sessionStorage.getItem("sistema"))}
    };

    componentDidMount(){
        fetch("api/ficha/id/1", { method: "GET", Header: new Headers })
        .then(status)
        .then(json)
        .then(data => {
            sessionStorage.setItem("ficha", JSON.stringify(data))
             this.setState({ficha : data});
        })
    };

    render() {
        return (
            <div>
                <h1>nome: {this.state.ficha.nomePersonagem}</h1>
                Raca<select value={this.state.ficha.raca.nomeRaca}></select>
            </div>
            )

    }
}
ReactDOM.render(<Ficha />, document.getElementById('ficha'))