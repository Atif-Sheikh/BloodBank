import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    Button,
    Keyboard,
} from 'react-native';
import { Actions } from 'react-native-router-flux'; // New code
import { connect } from 'react-redux';
import { SignupNow } from '../store/actions'
import { Content, Input, Item, } from 'native-base';

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: "",
            email: "",
            password: ""
        };
    };
    static navigationOptions = {
        header: null
    };
    signup = () => {
        Keyboard.dismiss();
        const { userName, email, password } = this.state;
        if (userName.trim() && email.trim() && password) {
            const obj = {
                name: userName,
                email: email,
                password: password,
            };
            this.props.SignupNow(obj);
        } else {
            alert('Please enter correct feilds');
        }
    };
    render() {
        const title = "Home"
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Signup
                </Text>
                <Item style={styles.item} regular>
                    <Input name="username" placeholder='Name' onChangeText={userName => this.setState({ userName: userName.trim() })} />
                </Item>
                <Item style={styles.item} regular>
                    <Input placeholder='Email Address' style={styles.input} onChangeText={email => this.setState({ email: email.trim() })} />
                </Item>
                <Item style={styles.item} regular>
                    <Input placeholder='Password' style={styles.input} secureTextEntry={true} onChangeText={password => this.setState({ password })} />
                </Item>
                <Text style={{ color: 'red', fontSize: 20, marginBottom: 15 }}>{this.props.error}</Text>
                <View style={styles.btn}>
                    <Button color="#00d084" title="Signup" onPress={this.signup} />
                </View>
                <Text onPress={() => Actions.login()} style={{ fontSize: 20 }}>
                    Have an account ?   
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
        paddingBottom: 175,
        paddingTop: '10%',
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
        userName: state.root.userName,
        error: state.root.signupError,
    });
};
const mapDispatchToProp = (dispatch) => {
    return {
        SignupNow: (obj) => {
            dispatch(SignupNow(obj))
        },
        SiginNow: (name) => {
            dispatch(SiginNow(name))
        },
    };
};

export default connect(mapStateToProp, mapDispatchToProp)(Home);