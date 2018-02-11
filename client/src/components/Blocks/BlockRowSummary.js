import React, {Component} from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import {nFormatter} from "../../utilities/utilities";

export default class BlockRowSummary extends Component {

	render(){
		console.log(`BlockRowSummary ->`, this.props.block);
		return (
			<tr>
				<td><Link to={`/block/${this.props.block.height}`}>{this.props.block.height}</Link></td>
				<td><Link to={`/block/${this.props.block.hash}`}>{this.props.block.hash}</Link></td>
				<td>{this.props.block.raw.tx.length}</td>
				<td>{ this.props.block.difficulty > 1 ? nFormatter(this.props.block.raw.difficulty,2) : this.props.block.raw.difficulty}</td>
				<td>TBD</td>
				<td><Moment unix fromNow>{this.props.block.raw.time}</Moment></td>
			</tr>
		)
	}
}