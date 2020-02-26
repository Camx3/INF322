import { Reducer } from 'redux';
import { LOGIN, LOGOUT } from '../actions/userlogin.js';
import { RootAction } from '../store.js';

export interface UserState {
    isLoggedIn: Boolean,
    userInfo: UserInfo,
    error: String
}

export interface UserInfo {
    userName: String,
    password: String
}

const INITIAL_STATE: UserState = {
    isLoggedIn: false,
    userInfo: {
        userName: "",
        password: ""
    },
    error: ""
};

const user: Reducer<UserState, RootAction> = (state = INITIAL_STATE, action) => {
    if (action.type === LOGIN) {
        let userNameForm = action.userName;
        let passwordForm = action.password;
        if (userNameForm != "" && passwordForm != "") {
            return {
                ...state,
                isLoggedIn: true,
                userInfo: {
                    userName: userNameForm,
                    password: passwordForm
                }
            };
        }
        return {
            ...INITIAL_STATE,
        };
    } else if (action.type === LOGOUT) {
        return {
            ...INITIAL_STATE,
        };
    } else {
        return state;
    }
};

export default user;