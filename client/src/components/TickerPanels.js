import React, {Component} from 'react';
import { Row, Col, Panel} from 'react-bootstrap';

export default class TickerPanels extends Component {

	render() {
		return (
			<Row bsStyle="margin 0 -30px 0 -30px" id="ticker-panels">
				<Col md={12} bsStyle="padding:0">
					<Col xs={3}>
						<Panel header="BTC Price">
							BTC Price
						</Panel>
					</Col>
					<Col xs={3}>
						<Panel header="USD Price">
							USD Price
						</Panel>
					</Col>
					<Col xs={3}>
						<Panel header="% Change">
							<Row>
								<Col xs={12}>
									% Change
								</Col>
							</Row>
						</Panel>
					</Col>
					<Col xs={3}>
						<Panel header="Market Cap">
							Market Cap
						</Panel>
					</Col>
					<Col xs={3}>
						<Panel header="Master Nodes">
							??? / ???
						</Panel>
					</Col>
					<Col xs={3}>
						<Panel header="Difficulty">
							---
						</Panel>
					</Col>
					<Col xs={3}>
						<Panel header="Outstanding">
							Outstanding
						</Panel>
					</Col>
					<Col xs={3}>
						<Panel header="Notice">
							All data updated every 5 minutes
						</Panel>
					</Col>
				</Col>
			</Row>
		)
	}
}