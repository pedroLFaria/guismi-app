class Ficha extends React.Component{
    constructor(props) {
        super(props)
        this.state = {ficha:[], sistema:JSON.parse(sessionStorage.getItem("sistema"))}
    }
    componentDidMount(){
        this.timerID = setInterval(
      () => this.tick(),
      1000
    );
    }
    tick() {
        fetch("api/ficha/id/1", { method: "GET", Header: new Headers })
        .then(status)
        .then(json)
        .then(data => {
            sessionStorage.setItem("ficha", JSON.stringify(data))
             this.setState({ficha : data});
        })
  }

    render() {
        return (
            <div>
                <h1>nome: {this.state.ficha.nomePersonagem}</h1>
            </div>)
    }
}
ReactDOM.render(<Ficha />, document.getElementById('ficha'))