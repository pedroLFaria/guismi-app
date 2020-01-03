import * as React from 'react'
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import {userService} from "../../_services/user.service";

interface Props{
    reload():void
}

export default class ButtonBar extends React.Component<Props, any>{
    handleRetornar(){
        window.location.hash = ("#/escolhe_ficha")
    }
    handleSair(){
        userService.logout();
        window.location.hash = ("#/")
    }
    render(){
        return (
            <ButtonGroup>
                <Button
                    size={"sm"} variant="secondary"
                    onClick={this.props.reload.bind(this)}
                >Reload</Button>
                <Button
                    size={"sm"} variant="secondary"
                    onClick={this.handleRetornar.bind(this)}
                >Retornar</Button>
                <Button
                    size={"sm"} variant="secondary"
                    onClick={this.handleSair.bind(this)}
                >Sair</Button>
            </ButtonGroup>
        );
    }
}
