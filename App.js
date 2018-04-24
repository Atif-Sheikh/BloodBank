import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,

} from 'react-native';
import Routers from './src/router'
import { Provider } from 'react-redux';
import store from './src/store';
import { Container } from 'native-base';
import * as firebase from 'firebase';



export default class App extends Component {

  componentWillMount() {
    // Initialize Firebase
      var config = {
        apiKey: "AIzaSyDbqF2-5PGHJU2Deqg_kHfuhhQnTVus-EE",
        authDomain: "todo-app-database-bd16f.firebaseapp.com",
        databaseURL: "https://todo-app-database-bd16f.firebaseio.com",
        projectId: "todo-app-database-bd16f",
        storageBucket: "todo-app-database-bd16f.appspot.com",
        messagingSenderId: "312069326930"
      };
      firebase.initializeApp(config);
    }
  render() {
    return (
      <Provider store={store}>
        <Container>
          <Routers />
        </Container>
      </Provider>
    );
  };
};


