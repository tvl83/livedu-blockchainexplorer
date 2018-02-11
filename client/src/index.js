import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './index.css';
import App from './App';
import Block from "./components/Blocks/Block";

ReactDOM.render(
	<BrowserRouter>
		<Switch>
			<Route exact path='/' component={App}/>
			{/*<Route path='/address/:address' component={Address}/>*/}
			<Route path='/block/:block' component={Block}/>
			{/*<Route path='/tx/:txhash' component={Transaction}/>*/}
		</Switch>
	</BrowserRouter>
	,	document.getElementById('root'));
