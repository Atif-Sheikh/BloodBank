import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Button, Keyboard, BackHandler } from 'react-native';
import { Content, Input, Item } from 'native-base';
import { Actions } from 'react-native-router-flux'; // New code
import { SiginNow } from '../store/actions'
import { connect } from 'react-redux';

class Login extends Component {
    constructor(props){
        super(props)
        state = {
            email: "",
            password: ""
        }
    }
    static navigationOptions = {
        header: null
    }

    login = () => {
        Keyboard.dismiss();
        const user = {
            email: this.state.email.trim(),
            password: this.state.password.trim(),
        };
        this.props.SiginNow(user);
    };
    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', () => {
            BackHandler.exitApp()
        });
    };
    render() {
        const title = "";
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Login
                </Text>
                <Item style={styles.item} regular>
                    <Input placeholder='Email Address' onChangeText={email => this.setState({email})} style={styles.input} />
                </Item>

                <Item style={styles.item} regular>
                    <Input placeholder='Password' onChangeText={password => this.setState({password})} style={styles.input} secureTextEntry={true}
                    />
                </Item>
                <Text style={{color: 'red', fontSize: 20, marginBottom: 15}}>{this.props.error}</Text>
                <View style={styles.btn}>
                    <Button color="#00d084" title="Sigin" onPress={this.login} />
                </View>
                <Text onPress={() => Actions.signup()} style={{fontSize: 20}}>
                    Don't have account ? 
                </Text>
            </View>
        );
    };
};
const styles = StyleSheet.create({
    container: {
        flex: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingBottom: 255,
        paddingTop: '30%',        
    },
    body: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    welcome: {
        fontSize: 50,
        textAlign: 'center',
        margin: 10,
        fontFamily: "serif",
        marginBottom: 25,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    input: {
        height: 50,
    },
    item: {
        width: "80%",
        marginBottom: 30,
        borderColor: '#00d084',
        borderWidth: 5,
        borderRadius: 7,
    },
    btn: {
        width: 200,
        height: 50,
    },
});

const mapStateToProp = (state) => {
    return ({
        error: state.root.loginError,
    });
};
const mapDispatchToProp = (dispatch) => {
    return {
        SiginNow: (name) => {
            dispatch(SiginNow(name))
        },
    };
};

export default connect(mapStateToProp, mapDispatchToProp)(Login);