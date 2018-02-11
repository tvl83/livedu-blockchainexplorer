import React, {Component} from 'react';
import { Row, Tabs, Tab} from 'react-bootstrap';
import LatestBlocks from "./DataPanels/LatestBlocks";

export default class DataPanels extends Component {

	render() {
		return (
			<Row>
				<Tabs id="data-panels">
					<Tab eventKey={1} title="Latest Blocks">
						<LatestBlocks/>
					</Tab>
				</Tabs>
			</Row>
		)
	}
}