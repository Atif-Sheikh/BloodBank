import ActionTypes from '../constant/constant';
import * as firebase from 'firebase';
import { Actions } from 'react-native-router-flux'; // New code

export const SignupNow = (data) => {
    return dispatch =>{ 
    dispatch({type: ActionTypes.SIGNUPERROR, payload: ''});     
    let { email, password, userName } = data;
    firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
        .then((result) => {
            console.log(result)
            firebase.database().ref(`/users/${result.uid}`).set(data)
                .then((user) => {
                firebase.auth().currentUser.updateProfile({displayName: userName})            
                dispatch({ type: ActionTypes.SIGNUP, payload: data });
                Actions.home()
            });
        })
        .catch((error) => {
            dispatch({type: ActionTypes.SIGNUPERROR, payload: error.message});
        });
    };
};
export const SiginNow = (user) => {
    return dispatch => {
        dispatch({ type: ActionTypes.LOGINERROR, payload: '' });        
        firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            .then((result) => {
                console.log(result)
                dispatch({ type: ActionTypes.SIGIN, payload: result });
                Actions.home();
            })
            .catch((error) => {
                dispatch({type: ActionTypes.LOGINERROR, payload: error.message});
            });
    };
};
export const logOutNow = () => {
    return dispatch => {
        firebase.auth().signOut()
        .then(() => {
            dispatch({ type: ActionTypes.SIGNOUT })
            Actions.login()
          }).catch((error) => {
            alert(error)
          });
    };
};
export const GetDonors = () => {
    return dispatch => {
        firebase.database().ref(`/donors`).on('value', snap => {
            let donors = [];
            for(let key in snap.val()){
                donors.push(snap.val()[key]);
            };
            dispatch({type: ActionTypes.GETDONORS, payload: donors});
        });
    };
};
export const SubmitBlood = (obj) => {
    return dispatch => {
        console.log(obj);
        firebase.database().ref(`/donors`).push(obj);
    };
};
