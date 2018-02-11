import React, { Component } from 'react';
import {Grid} from 'react-bootstrap';
import './App.css';
import TickerPanels from "./components/TickerPanels";
import Heading from "./components/Heading";
import DataPanels from "./components/DataPanels";

class App extends Component {
  render() {
    return (
      <Grid>
        <Heading />
        <TickerPanels/>
        <DataPanels/>
      </Grid>
    );
  }
}

export default App;
