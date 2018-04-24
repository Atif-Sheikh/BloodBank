import React, { Component } from 'react';
import { Text, Platform, StyleSheet, View, Image } from 'react-native';
import { Content, Button, List, ListItem, Left, Body, Right, Thumbnail, } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { logOutNow } from '../store/actions';

class Sidebar extends Component {
  render() {
    return (
        <Content style={{backgroundColor:'#FFFFFF',flex:1}}>
          <List>
            <ListItem avatar>
              {/* <Left> */}
                <Thumbnail style={{alignSelf:"center", marginTop:"4%"}} source={require('../img/drop.jpg')} />
              {/* </Left> */}
              <Body>
                <Text>{'\n'}</Text>
                <Text style = {{fontSize:20, padding:"3%"}}> {this.props.user} </Text>
              </Body>
              </ListItem>
          </List>
            <Text>{'\n'}</Text>        
          <Button block rounded onPress= {() => Actions.form()} style ={{width:"90%",alignSelf:"center", backgroundColor: '#00d084'}}  ><Text style={{color:"white",fontSize:19}}>Donate Blood </Text></Button>          
            <Text>{'\n'}</Text>          
          <Button block rounded onPress= {this.props.logOutNow} style ={{ width:"90%", alignSelf:"center", backgroundColor: '#00d084' }} ><Text style={{color:"white", fontSize:19}}>Sign Out </Text></Button>
        </Content>
    );
  };
};
const styles = StyleSheet.create({
    text:{
    color:"white"
    }  
  });
  const mapStateToProp = (state) => {
    return ({
        user: state.root.user.userName,
    });
};
const mapDispatchToProp = (dispatch) => {
    return {
        logOutNow: () => {
            dispatch(logOutNow())
        },
    };
};
export default connect(mapStateToProp, mapDispatchToProp)(Sidebar);
  