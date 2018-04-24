import React, { Component } from 'react';
import { StyleSheet, View, Image, ImageBackground, Text, StatusBar } from 'react-native';
import { Actions } from 'react-native-router-flux'; 
import Spinner from './spinner';
// import { CheckLogin } from '../store/actions';
import { connect } from 'react-redux';

class Splash extends Component {
    static navigationOptions = {
        header: null,
    };
    componentWillMount(){
        setTimeout(() => {
            Actions.login();
            // this.props.CheckLogin();
        }, 2000);
    }
    render() {
        StatusBar.setBackgroundColor("#00d084");
        return (
            <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <ImageBackground
                    style={{width: '100%', height: '100%'}}
                    source={require('../img/drop.jpg')}
                >
                <View style={{marginTop: '150%'}}>
                    <Spinner size='large' style={styles.spinner} />
                    <Text style={{ alignSelf: 'center', margin: 30, fontSize: 20, fontWeight: 'bold'}}>
                        Please wait...
                    </Text>
                </View>
           </ImageBackground>
            </View>
        );
    };
};
function mapStateToProp(state) {
    return ({
        // users: state.root.users,             
    });
};
function mapDispatchToProp(dispatch) {
    return {
        CheckLogin: () => {
            dispatch(CheckLogin())
        },
    };
};
const styles = StyleSheet.create({
    spinner: {
        // marginTop: '50%',
        // flex: 1,
        // flexDirection: 'center',
    },
});

export default connect(mapStateToProp, mapDispatchToProp)(Splash);