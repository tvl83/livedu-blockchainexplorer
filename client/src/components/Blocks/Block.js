import React, {Component} from 'react';
import {Grid, Col, Row, Tabs, Tab, Table} from 'react-bootstrap';
import {CHOSEN_NET, formatBytes, nFormatter, numberWithCommas, ROOT_URL} from "../../utilities/utilities";
// import {Link} from "react-router-dom";
import FaArrowLeft from "react-icons/lib/fa/arrow-left"
import FaArrowRight from "react-icons/lib/fa/arrow-right"
import Moment from 'react-moment';
import Heading from "../Heading";
import TransactionRowSummary from "../Transactions/TransactionRowSummary";
// import SearchForm from "../SearchForm";

export default class Block extends Component {

	constructor(props) {
		super(props);

		this.state = {
			blockHash: this.props.match.params.block,
			block: {
				raw: {
					difficulty: 0,
					time: 0
				},
				meta: {
					tx: []
				},
				tx: []
			},
			txs: {
				raw: {},
				vouts: [],
				vins: []
			},
			rawResponse: {
				txs: [],
				valueOut: 0,
				block: {
					meta: {
						tx: []
					}
				}
			}
		}
	};

	componentWillMount() {
		let blockHash = this.state.blockHash;
		let _this = this;
		fetch(`${ROOT_URL}/block?block=${blockHash}&net=${CHOSEN_NET}`)
			.then((data) => {
				data.json().then((data) => {
					// console.log("data ", data);
					// console.log("blockInfo ", data.raw);
					// console.log("txs ", data.txs);
					if (data !== {}) {
						_this.setState(
							{
								rawResponse: data.raw,
								block: data,
								txs: data.txs
							}
						);
					}
				});
			});
	}

	render() {
		console.log("Block->State");
		console.log(this.state);

		let blockInfo = this.state.block;
		// let txsVins = this.state.txs.vins;
		let txsVouts = this.state.rawResponse.txs;
		// console.log("txvouts", txsVouts);
		// console.log("state", this.state);

		if (blockInfo !== undefined) {
			return (
				<Grid>
					<Heading/>
					{/*<SearchForm redirect={false} path=""/>*/}
					<Row>
						<Col md={12}>
							<h2>Details for Block #{blockInfo.height}</h2>
							<Row>
								<Table striped hover>
									<tbody>
									<tr>
										<td>Hash</td>
										<td><a href={`/block/${blockInfo.height - 1}`}><FaArrowLeft/></a><code>{blockInfo.hash}</code> <a
											href={`/block/${blockInfo.height + 1}`}><FaArrowRight/></a></td>
									</tr>
									<tr>
										<td>Date/Time</td>
										<td><Moment unix>{blockInfo.raw.time}</Moment></td>
									</tr>
									<tr>
										<td>Transactions</td>
										{/*<td>{txs.length}*/}
										<td>
											<small>{formatBytes(blockInfo.raw.size)}</small>
										</td>
										{/*</td>*/}
									</tr>
									<tr>
										<td>Value Out</td>
										<td>N/A</td>
									</tr>
									<tr>
										<td>Difficulty</td>
										<td>{blockInfo.raw.difficulty > 1 ? nFormatter(blockInfo.raw.difficulty, 2) : blockInfo.raw.difficulty}</td>
									</tr>
									<tr>
										<td>Coin Created</td>
										<td>{blockInfo.raw.mint}</td>
									</tr>
									</tbody>
								</Table>
							</Row>
							<Tabs id="data-panels">
								<Tab eventKey={1} title="Transactions">
									<Table>
										<thead>
										<tr>
											<td>TXID Hash</td>
											<td>Value Out</td>
											<td>From</td>
											<td>To</td>
										</tr>
										</thead>
										<tbody>
										{
											txsVouts.map(tx => {
												return (
													<TransactionRowSummary key={tx._id} tx={tx}/>
												)
											})
										}
										</tbody>
									</Table>

								</Tab>
								<Tab eventKey={2} title="RAW Block (JSON)">
									<pre>{JSON.stringify(this.state.block.raw, null, 4)}</pre>
								</Tab>
							</Tabs>
						</Col>
					</Row>
				</Grid>
			)
		} else {
			return (
				<Grid>
					<h1>Block Height or Hash Not found</h1>
					<a href="/">Home</a>
				</Grid>
			)
		}
	}
}