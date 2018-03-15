import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
//import App from './containers/App2';
import App from './containers/App';
import store from "./store/index";
//import { addArticle } from "./actions/index";
//window.store = store;
//window.addArticle = addArticle;

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('app'))