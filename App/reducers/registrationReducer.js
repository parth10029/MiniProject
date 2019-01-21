import { SET_USER_LIST, SET_LOADER, SET_USER_DATA,post_registration } from "../actions/types";

const INITIAL_STATE = {
    loading: false,
    userData: {}
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case post_registration:{
            return{
                ...state,
                userData: action.payload
            }
        }
        default:
            return state;
    }
}