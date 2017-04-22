import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {

	componentWillMount () {
		const config = {
		    apiKey: 'AIzaSyCYP01sPClb48CyCy1Z2uamNKNecaXn9JY',
		    authDomain: 'manager-914a1.firebaseapp.com',
		    databaseURL: 'https://manager-914a1.firebaseio.com',
		    projectId: 'manager-914a1',
		    storageBucket: 'manager-914a1.appspot.com',
		    messagingSenderId: '325682931099'
  		};

 		 firebase.initializeApp(config);
	}

	render () {
		
		const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

// This is how we wire up Redux Thunk to manage asynchroneous action calls

		return (
			<Provider store = {store}>
				<Router />
			</Provider>
		)
	}
}

export default App;

// The ultimate goal of redux is to reduce complexity within components
// It assures that logic is outsourced to the redux part and is therefore 
// easier maintainable, managable and changeable
// React is all about showing something on screen, and watching for user events
// Redux is all about actually keeping track of the state of our application and deciding
// how to handle or interpret the events that are coming in