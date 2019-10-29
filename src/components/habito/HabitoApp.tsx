import * as React from "react";
import Habito from './Habito';
import Especializacao from "../especializacao/Especializacao";
import { Button, Modal, FormControl } from "react-bootstrap";
import ModalHeader from "react-bootstrap/ModalHeader";
import Sistema from "../sistema/Sistema";

interface Props {
    habito: Habito
    especializacao?: Especializacao
}

interface State {
    habito: Habito
    show: boolean
}

export default class HabitoApp extends React.Component<Props, State>{
    constructor(props: Props) {
        super(props)
        this.state = {
            habito: this.props.habito,
            show: false
        }
    }

    render() {
        const habito = this.props.habito
        const especializacao = this.props.especializacao
        return (
            <div>
                <Modal>
                    <ModalHeader closeButton>
                        <FormControl>{Sistema.habitos.map((habito,index)=>{
                            <option
                                value={habito.idHabito.toString()}
                                key={index}
                            >
                                {habito.nomeHabito}
                            </option>
                        })
                    }
                        </FormControl>
                    </ModalHeader>
                </Modal>
            </div>
        )
    }
}