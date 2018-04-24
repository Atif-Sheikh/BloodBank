import React, { Component } from 'react';
import { Container, Header, Content, Item, Input, Label,Button,Text, Toast,Picker,Icon } from 'native-base';
import { Platform, StyleSheet, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { logOutNow, SubmitBlood } from '../store/actions';

class Form extends Component {
  constructor(){
    super();
    this.state = {
      name: '',
      contact: '',
      group: 'A+',
      gender: 'Male',
      addr: '',
      city: '',
      isDonated: false,
    };
  };
    static navigationOptions = {
        header: null,
    };
    submit = () => {
      const { name, contact, group, gender, addr, city } = this.state;
      if(name && contact && group, gender && addr && city){
        this.props.submitBlood(this.state);
      }else{
        alert('Please enter all fields correctly');
      }
    };
  render() {
    return (
        <Container style = {{flex:1}}>
        <View style  ={{backgroundColor:"#00d084",minHeight:"10%",justifyContent:"center",padding:"2%",flexDirection:"row"}} >
        <View style = {{flex:1,justifyContent:"center"}}>
        <Icon name = "md-arrow-back" style={{color:"white"}} onPress = {()=>{Actions.pop()}} />
        </View>
        <View style = {{flex:2,justifyContent:"center"}}>
        <Text style = {{fontSize:20,color:"white",}}>Donate Blood</Text>
        </View>
       <View style = {{flex:1}} />
        </View>
            <Content>
                <Item floatingLabel last> 
                  <Label>Name</Label>
                  <Input onChangeText = {(val)  => {this.setState({name:val})}  }  />
                </Item>
              
                <Item floatingLabel last>
                  <Label>Contact No</Label>
                  <Input onChangeText = {(val)=>{this.setState({contact: val})}} keyboardType="phone-pad"  />
                </Item>
                <Picker
                  selectedValue={this.state.group}                
                  onValueChange={(value)=>{this.setState({group: value})}}
                >
                  <Item label="A+" value="A+" />
                  <Item label="AB+" value="AB+" />
                  <Item label="B+" value="B+" />
                  <Item label="O+" value="O+" />
                  <Item label="A-" value="A-" />
                  <Item label="AB-" value="AB-" />
                  <Item label="B-" value="B-" />
                  <Item label="O-" value="O-" /> 
                </Picker>
                <Picker
              selectedValue={this.state.gender}
              onValueChange={(value)=>{this.setState({gender: value})}}
            >
            <Item label="Male" value="Male" />
            <Item label="Female" value="Female" />
            </Picker>
                <Item floatingLabel last>
                  <Label>City</Label>
                  <Input onChangeText = {(val)=>{this.setState({city:val})}}  />
                </Item>
                <Item floatingLabel last>
                  <Label>Address</Label>
                  <Input onChangeText = {(val)=>{this.setState({addr:val})}}  />
                </Item>
            <Text></Text>
               {true ?     <Button block rounded onPress={()=>{alert("you Cant Donate Blood Before 3 Months"),Actions.pop()}} style = {{width:"50%",alignSelf:"center", backgroundColor: '#00d084'}} >
            <Text>Submit</Text>
          </Button> :     <Button block danger rounded onPress = {this.submit} style={{width:"50%", alignSelf:"center"}} >
            <Text>Submit</Text>
          </Button> }
            </Content>
          </Container>
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
    });
};
const mapDispatchToProp = (dispatch) => {
    return {
        logOutNow: () => {
            dispatch(logOutNow())
        },
        submitBlood: (obj) => {
          dispatch(SubmitBlood(obj))
        },
    };
};
export default connect(mapStateToProp, mapDispatchToProp)(Form);
  