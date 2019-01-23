import { SET_PRODUCT_LIST, SET_LOADER } from "../actions/types";

const INITIAL_STATE = {
    productList: [],
    loading: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_PRODUCT_LIST:{
            return{
                ...state,
                productList: action.payload
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