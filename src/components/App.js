import React, { Component } from "react";

import "../styles/App.css";

// import { syncHistoryWithStore } from 'react-router-redux';
import { MuiThemeProvider } from '@material-ui/core/styles';
import {  Provider } from 'react-redux';

import getTheme from '../common/constants/theme';

import Routes from '../components/app/AppRoutes';

const customTheme = getTheme(
  'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.80 Safari/537.36');



class App extends Component {


  render() {
    const { store } = this.props;
    return (
      <MuiThemeProvider theme={customTheme}>
        <Provider store={store}>
            <Routes />
        </Provider>
      </MuiThemeProvider>
    );
  }
}


export default App;
