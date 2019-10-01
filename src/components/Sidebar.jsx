import React from 'react'
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

class Sidebar extends React.Component{
    render() {
        return (
            <ButtonGroup vertical>
                <Button>Button</Button>
                <Button>Button</Button>
                <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-vertical-dropdown-1">
                    <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
                </DropdownButton>
                <Button>Button</Button>
                <Button>Button</Button>
                <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-vertical-dropdown-2">
                    <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
                </DropdownButton>
                <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-vertical-dropdown-3">
                    <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
                </DropdownButton>
            </ButtonGroup>
        )
    }
}
export {Sidebar}
