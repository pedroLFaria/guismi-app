import * as React from "react";
import Ficha from "./Ficha";
import {FormControl} from "react-bootstrap";

interface Props {
    ficha:Ficha
}
interface State {
    ficha:Ficha,
    plaintext:boolean,
    readonly:boolean
}
export default class IdadeApp extends React.Component<Props, State>{
    constructor(props:Props) {
        super(props);
        this.state={
            ficha:this.props.ficha,
            plaintext:true,
            readonly:true
        }
    }

    componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any): void {
        if(prevProps.ficha.idade !== this.props.ficha.idade)
            this.setState({
                ficha:this.props.ficha
            })
    }

    render(){
        return <FormControl
            as={'input'}
            type={"number"}
            plaintext={this.state.plaintext}
            readOnly={this.state.readonly}
            value={this.state.ficha.idade.toString()}
        />
    }
}
