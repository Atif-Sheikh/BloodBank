import ActionTypes from '../constant/constant';

const INITIAL_STATE = {
    user: [],
    email: '',
    loginError: '',
    signupError: '',
    donors: [],
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        //Login
        case ActionTypes.SIGIN:
            return ({
                ...state,
                user: action.payload,
            });
        case ActionTypes.LOGINERROR:
            return({
                ...state,
                loginError: action.payload,
            });
        case ActionTypes.GETDONORS: 
            return({
                ...state,
                donors: action.payload,
            });
        //signup
        case ActionTypes.SIGNUP:
            return ({
                ...state,
                user: action.payload
            });
        case ActionTypes.SIGNUPERROR:
            return({
                ...state,
                signupError: action.payload,
            });
        default:
            return state;
    };
};