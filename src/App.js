/**
 * created by Hemadri Dasari on 26/05/2018
 */

import React, { Component } from "react";
import AdSlotsData from './AdSlotsData/components/AdSlotsData';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import { white } from "material-ui/styles/colors";
import Header from './Layout/components/Header';
import Footer from './Layout/components/Footer';
import {Provider} from 'react-redux';
import store from './store';

const SERVER_URL = 'http://192.168.99.100:8080';

const buttonStyle = {
  color: "#333"
};

const muiTheme = getMuiTheme({
  card: {
    titleColor: white,
    subtitleColor: white,
    fontWeight: "bold",
  },
  textField: {
    textColor: '#333',
    hintColor: '#333',
    floatingLabelColor: '#333',
    disabledTextColor: '#3333',
    errorColor: 'red',
    focusColor: '#333',
    backgroundColor: "transparent",
    borderColor: '#333'
  }
});


export default class App extends Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props !== nextProps) {
      return true;
    }
    if (this.state !== nextState) {
      return true;
    }
    return false;
  }

  renderHeader = () => {
    return (
      <header className="header">
        <Header appName="Adslots Manager"/>
      </header>
    );
  }

  renderFooter = () => {
    return (
       <footer>
          <Footer />
        </footer>
    );
  }

  renderData = () => {
    return (
      <AdSlotsData /> 
    );
  }
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <Provider store={store}>
          <div>
            {this.renderHeader()}
            {this.renderData()} 
            {this.renderFooter()}
          </div>
        </Provider>
      </MuiThemeProvider>
    );
  }
}
