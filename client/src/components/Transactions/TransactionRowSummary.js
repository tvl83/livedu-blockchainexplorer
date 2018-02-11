import React, {Component} from 'react';
import {numberWithCommas} from "../../utilities/utilities";
// import AddressLink from "../Addresses/AddressLink";
// import TransactionLink from "./TransactionLink";
// import {CHOSEN_NET, ROOT_URL} from "../../utilities/utilities";
// import {Table} from "react-bootstrap";
// import {Link} from "react-router-dom";

export default class TransactionRowSummary extends Component {

	constructor(props) {
		super(props);
		this.state = {
			tx: [{
				txid: 0,
				vout: [{
					value: 0
				}]
			}],
			valueOut: 0,
			fromAddresses: [],
			toAddresses: [],
			voutsData: []
		};

		this.gatherAddresses = this.gatherAddresses.bind(this);
		this.calculateTotalPerTx = this.calculateTotalPerTx.bind(this);
	}

	// componentWillMount() {
	// 	this.gatherAddresses();
	// }
	//
	// calculateTotalPerTx() {
	// 	let total = 0;
	// 	this.props.tx.vouts.forEach(vout => {
	// 		total += vout.value;
	// 	});
	// 	return  numberWithCommas(total.toFixed(8));
	// }
	//
	// gatherAddresses() {
	// 	let addresses = [];
	// 	this.props.tx.vouts.forEach(vout => {
	// 		addresses.push({address: vout.address, value: vout.value});
	// 	});
	//
	// 	this.setState({
	// 		toAddresses: addresses
	// 	})
	// }

	// render() {
	// 	let tx = this.props.tx;
	// 	console.log(tx);
		// console.log(this.state.toAddresses);
		// return (
		// 	<tr>
		// 		<td><TransactionLink txid={tx.txid} txidIndex='-1'/></td>
		// 		<td>{this.calculateTotalPerTx()} ION</td>
		// 		<td>
		// 			{
		// 				tx.raw.vin[0].hasOwnProperty("coinbase")?
		// 					'Generation + Fees'
		// 					:
		// 					<TransactionLink txid={tx.raw.vin[0].txid} txidIndex='-1'/>
		// 			}
		// 		</td>
		// 		<td>
		// 			<ul>
		// 				{this.state.toAddresses.map(address => {
		// 					return (
		// 						<li key={address.address}>
		// 							<div className="addr"> <AddressLink address={address.address} /></div>
		// 							<div className="amount">{numberWithCommas(address.value.toFixed(8))} ION</div>
		// 						</li>
		// 					)
		// 				})
		// 				}
		// 			</ul>
		// 		</td>
		// 	</tr>
		// )
	// }
}