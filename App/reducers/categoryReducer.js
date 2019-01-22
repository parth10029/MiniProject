import { SET_CAT_LIST, SET_LOADER } from "../actions/types";

const INITIAL_STATE = {
    userList: [],
    loading: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_CAT_LIST:{
            return{
                ...state,
                userList: action.payload
            }
        }
        case SET_LOADER:{
            return{
                ...state,
                loading: action.payload
            }
        }
        default:
            return state;
    }
}