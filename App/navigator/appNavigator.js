import { createStackNavigator, createAppContainer } from 'react-navigation';
import Login from '../components/Login';
import registration from '../components/registration';
import home from '../components/home';
import vendor from '../components/vendor';
import customer from '../components/customer';
import addproduct from '../components/addproduct';
import product from '../components/product';
import subproduct from '../components/subproduct';
import productdetail from '../components/productdetail';

const drawer=createStackNavigator({
    home,
    registration,
    Login,
    vendor,
    customer,
    addproduct,
    product,
    subproduct,
    productdetail
},{
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false
        }
    ,initialRouteName:'home'
    }

);

export default createAppContainer(drawer);