import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Text, Body,Button,Icon } from 'native-base';
import{ Actions }from 'react-native-router-flux';
import { Platform, StyleSheet, View, Image } from 'react-native';

export default class UserDetails extends Component {
    static navigationOptions = {
        header: null
    };
    get = () => {
    alert("Thank You");
    Actions.home();
};
  render() {
    console.log(this.props.donated)
    console.log(this.props.navigation.state.params.name)
    console.log(this.props.navigation.state.params.no)
    return (
      <Container style = {{flex:1}}> 
       <View style  ={{backgroundColor:"#00d084",minHeight:"10%",justifyContent:"center",padding:"2%",flexDirection:"row"}} >
        <View style = {{flex:1,justifyContent:"center"}}>
        <Icon name = "md-arrow-back"  style = {{color:"white"}} onPress = {()=>{Actions.pop()}} />
        </View>
        <View style = {{flex:2,justifyContent:"center"}}>
        <Text style = {{fontSize:20,color:"white",}}>Donor Details</Text>
        </View>
       <View style = {{flex:1}} />
        </View>
        <Content>
          <Card>
            <CardItem style = {{alignSelf:"center"}}>
              <Text style = {{fontWeight:"bold"}}>Donor Details</Text>
            </CardItem>
            <CardItem>
              <Body>

                <Text>
                Name: {this.props.navigation.state.params.name}
                </Text>
                <Text>
                Number: {this.props.navigation.state.params.no}
                
                </Text>
                <Text>
                Blood Group: {this.props.navigation.state.params.bg}
                  
                </Text>
                <Text>
                Address: {this.props.navigation.state.params.addr}
                
                </Text>
                <Text>
                City: {this.props.navigation.state.params.city}
                
                </Text>
              {false ? <Text> Donation Already Done </Text>  
              :    <Button onPress={this.get} block rounded style={{width:"80%", backgroundColor: '#00d084', alignSelf:"center"}}><Text> Get </Text></Button> }
              </Body>
            </CardItem>        
         </Card>
        </Content>
      </Container>
    );
  };
};