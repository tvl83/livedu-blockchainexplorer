import React, {Component} from 'react';
import {Table} from 'react-bootstrap';
import BlockRowSummary from "../Blocks/BlockRowSummary";
import {ROOT_URL} from "../../utilities/utilities";

export default class LatestBlocks extends Component {

	constructor(props) {
		super(props);
		this.state = {
			blocks: []
		};
	}

	componentWillMount(){
		fetch(`${ROOT_URL}/latestblocks`)
			.then((data) => {
				data.json().then((data)=>{
					this.setState(
						{
							blocks: data
						}
					);
				});
			});
	}

	render(){
		let blocks = this.state.blocks;

		console.log(blocks);

		return (
			<div>
				<Table striped hover responsive>
					<thead>
					<tr>
						<td>Block</td>
						<td>Hash</td>
						<td>Transactions</td>
						<td>Difficulty</td>
						<td>Amount</td>
						<td>Time</td>
					</tr>
					</thead>
					<tbody>
					{
						blocks.map(block => {
							return (
								<BlockRowSummary key={block.height} block={block} />
							)
						})
					}
					</tbody>
				</Table>
			</div>
		)
	}
}