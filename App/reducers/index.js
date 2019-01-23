import { combineReducers } from 'redux';
import UserReducer from "./userReducer";
import PostReducer from "./postReducer";
import post_registration from "./registrationReducer";
import user_login from './loginReducer';
import allcategory  from './categoryReducer';
import product from './productReducer';
import subproduct from './sub_productReducer';

const appReducer = combineReducers({
    user: UserReducer,
    post: PostReducer,
    reg_user:post_registration,
    userlogin:user_login,
    fetchcategory:allcategory,
    onRefreshproduct:product,
    onRefreshsubproduct:subproduct,
});

export default appReducer;