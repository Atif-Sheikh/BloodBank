import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, StatusBar } from 'react-native';
import { Actions } from 'react-native-router-flux'; // New code
import { connect } from 'react-redux';
import { Container, Header, Content, Card, Button, CardItem, Icon, Right, 
    Left, Drawer, Picker, Body, Title, Item, Form } from 'native-base';
import { logOutNow, GetDonors } from '../store/actions';
import Sidebar from './sidebar';

class Home extends Component {
    constructor(){
        super();
        this.state = {
            selected: 'all',
            donors: [
                {name: 'kashif', no: '04543', group: 'A+', addr: 'karachi', city: 'karachi'},
                {name: 'Atif', no: '02543', group: 'B+', addr: 'karachi', city: 'karachi'},
                {name: 'Ashraf', no: '0421543', group: 'O+', addr: 'karachi', city: 'karachi'},
                {name: 'Hamid', no: '02421543', group: 'A+', addr: 'karachi', city: 'karachi'},                
                {name: 'Wajid', no: '042543', group: 'O-', addr: 'karachi', city: 'karachi'},
                {name: 'Saqib', no: '104543', group: 'AB+', addr: 'karachi', city: 'karachi'},
                {name: 'Yosuf', no: '04543', group: 'AB-', addr: 'karachi', city: 'karachi'},      
                {name: 'Javed', no: '0452343', group: 'A+', addr: 'karachi', city: 'karachi'},                
                {name: 'Arif', no: '0432543', group: 'B-', addr: 'karachi', city: 'karachi'},                                          
            ],
            filterdDonors: [],
        };
    };
    static navigationOptions = {
        header: null
    };
    logOut = () => {
        this.props.logOutNow();
    };
    closeDrawer = () => {
        this.drawer._root.close()
    };
    openDrawer = () => {
        this.drawer._root.open()
    };
    componentDidMount(){
        this.props.getDonors();
        this.setState({filterdDonors: this.state.donors,});
    }
    onValueChange = (value) => {
        if(value === 'all'){
            this.setState({filterdDonors: this.state.donors, selected: 'all'});
        }else{
            let arr = this.state.donors.filter((donor)=> donor.group === value);
            this.setState({filterdDonors: arr, selected: value});
        }
    };
    render() {
        StatusBar.setBarStyle('light-content', true);
        StatusBar.setBackgroundColor("#00d084");
        const title = "User"  
        return (
            <Container>
                <Drawer ref={(ref) => { this.drawer = ref; }} content={<Sidebar/>}>
                <Header style={styles.appbar} >
         <Left>
       <Button transparent onPress={()=>this.openDrawer()}>
         <Icon name='menu' />
       </Button>
       </Left>
       <Body>
         <Title>Blood Bank</Title>
       </Body>
        </Header>
        <Form>
            <Picker onValueChange={value => this.onValueChange(value)} selectedValue={this.state.selected}>
            <Item label="All" value="all" />
              <Item label="A+" value="A+" />
              <Item label="AB+" value="AB+" />
              <Item label="B+" value="B+" />
              <Item label="O+" value="O+" />
              <Item label="A-" value="A-" />
              <Item label="AB-" value="AB-" />
              <Item label="B-" value="B-" />
              <Item label="O-" value="O-" />              
            </Picker>
        </Form>
        <Content>
            {
                this.state.filterdDonors.map((donor, index) => {
                    return <Card>
                        <CardItem>
                        <Body><Text style={{fontSize: 20, textAlign: 'center', lineHeight: 50}}>{donor.group}</Text></Body>                        
                        <Button onPress={() => Actions.userDetails({
                            name: donor.name,
                            no: donor.no,
                            bg: donor.group,
                            addr: donor.addr,
                            city: donor.city,
                        })} style={{backgroundColor: '#00d084'}}><Text>View Details</Text></Button>
                        </CardItem>
                    </Card>
                })
            }
        </Content>
        </Drawer>
        </Container>
        );
    };
};
const styles = StyleSheet.create({
    container: {
        flex: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    wellcome: {
        fontSize: 18,
        marginLeft: 10
    },
    appbar: {
        backgroundColor: '#00d084',
    },
});


const mapStateToProp = (state) => {
    return ({
        userName: state.root.user,
        donors: state.root.donors,
    });
};
const mapDispatchToProp = (dispatch) => {
    return {
        logOutNow: () => {
            dispatch(logOutNow())
        },
        getDonors: () => {
            dispatch(GetDonors())
        }, 
    };
};

export default connect(mapStateToProp, mapDispatchToProp)(Home);