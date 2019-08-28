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
<<<<<<< HEAD
        this.state = {ficha:{raca:{}, caminhos:[{}], descendencias:[{}], habilidades:[{}], habitos:[{}], idiomas:[{}], inventarios:[{}], patronos:[{}], situacoes:[{}]}, sistema:JSON.parse(sessionStorage.getItem("sistema"))}
    }
=======
        this.state = {ficha:{
            raca:{},
            caminhos:{},
            descendencias:{},
            habilidades:{},
            habitos:{},
            idiomas:{}
        }, sistema:JSON.parse(sessionStorage.getItem("sistema"))}
    };

>>>>>>> 857e11b8e1ad7d58f5a95052d25808a766580ef9
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
<<<<<<< HEAD
                <h1>raca: {this.state.ficha.raca.nomeRaca}</h1>
            </div>)
=======
                Raca<select value={this.state.ficha.raca.nomeRaca}></select>
            </div>
            )

>>>>>>> 857e11b8e1ad7d58f5a95052d25808a766580ef9
    }
}
ReactDOM.render(<Ficha />, document.getElementById('ficha'))