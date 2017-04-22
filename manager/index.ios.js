/* The Set Up Process:

1) init new react native project called manager
2) --save react-redux redux -> Installing React-Redux and Redux
3) Create a file in root directory (manager) called src
4) Create new file in src called App.js
5)  import React, { Component } from 'react';
    import { View, Text } from 'react-native';
    import { Provider } from 'react-redux';
    import { createStore } from 'redux'; 
6) Define class and include Provider
7) At store = createStore () function to the Provider
8) Go to index.android.js and delete everything but   
      import { AppRegistry } from 'react-native';
      import App from './src/App';

      AppRegistry.registerComponent('manager', () => App);
9) Copy Paste index.android.js into index.ios.js
10) react-native run-ios to start simulator
11) Expect error message, because the default reducer is missing (must do in redux)
12) Create folder in src called reducers
13) Create index.js - import { combineReducers } from 'redux'; and define a reducer
    boilerplate reducer     export default combineReducers({
                             banana: () => []
                            });
14) Import reducers to App and bind it to store={createStore(reducers)}
15) We are using firebase as a method for authentication, so we need to
    install npm install --save firebase
16) Go to firebase.google.com and create new project called manager
17) Enable E-Mail and Password authentication within the project
18) Copy Paste the default setup for Web Apps from firebase into App.js within
    component will mount
19) Don't forget to import firebase from 'firebase'; into App.js
20) Create folder called components in src directory
21) Copy Paste the common folder with all reusable components into the components directory
22) Now you are clear to go
23) Install Redux Thunk to include the possibility of asynchraneous action creators
    by npm install --save redux-thunk
    // With Redux Thunk we expand the range of values we can return from an action creator
    // With Redux Thunk we can return functions via dispatch, it means we can send manually
    // information to our reducers -> it is basically a backdoor into redux
24) Install npm install --save react-native-router-flux@3.35.0
    react native router flux will give us the keys to navigation

*/

import { AppRegistry } from 'react-native';
import App from './src/App';

AppRegistry.registerComponent('manager', () => App);
