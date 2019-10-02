import React from 'react'
import Form from 'react-bootstrap/Form'

class Nome extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			ficha: this.props.ficha,
			plaintext: true,
			readOnly: true
		}
		this.onClick = this.onClick.bind(this)
	}
	componentDidUpdate(prevProps) {
		if (prevProps.ficha.nomePersonagem !== this.props.ficha.nomePersonagem)
			this.setState({ ficha: this.props.ficha })
	}

	onClick(e) {
		this.setState({ plaintext: false, readOnly: false })
	}

	onBlur(e) {
		this.setState({ plaintext: true, readOnly: true })
	}

	render() {
		return (
			<Form.Control
				type="text"
				defaultValue={this.state.ficha.nomePersonagem}
				plaintext={this.state.plaintext}
				readOnly={this.state.readOnly}
				onClick={this.onClick}
				onBlur={this.onBlur.bind(this)}
			/>
		)
	}
}
export { Nome }