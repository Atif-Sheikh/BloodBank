import React,{ Component } from 'react';
// import { Nav } from './nav';
import { Router, Scene } from 'react-native-router-flux';
import Signup from './Components/signup';
import Login from './Components/login';
import Home from './Components/home';
import Form from './Components/form';
import Userdetails from './Components/userDetails';
import Splash from './Components/Splash';

export default class Routers extends Component{
    render(){
        return(
            <Router>
            <Scene key="root">
            <Scene
                key="splash"            
                component={Splash}
                />
              <Scene
                key="login"
                component={Login}
                title="Login"
                />
              <Scene
                key="form"
                component={Form}
                title="Form"
                />
              <Scene
                key="userDetails"
                component={Userdetails}
                title="UserDetails"
                />
              <Scene key="home"
                component={Home}
                title="Home"
                initial                
                />
              <Scene
                key="signup"
                component={Signup}
                title="Main"
              />
            </Scene>
          </Router>
        );
    };
};