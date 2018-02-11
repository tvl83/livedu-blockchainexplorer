import React, {Component} from 'react';
import { Row, Col } from 'react-bootstrap';

export default class Heading extends Component {

	constructor(props){
		super(props);

	}

	render() {
		return (
			<Row>
				<Col md={12}>
					<h1>Blockchain Explorer (Main/Test)</h1>
					<p>latest block <span id="up-to-block">###</span></p>
					<p>All Data up to block <span id="up-to-block">###</span></p>
				</Col>
			</Row>
		)
	}
}