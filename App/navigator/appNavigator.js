import { createStackNavigator, createAppContainer } from 'react-navigation';
import Login from '../components/Login';
import registration from '../components/registration';
import home from '../components/home';
import vendor from '../components/vendor';
import customer from '../components/customer';
import addproduct from '../components/addproduct';
import product from '../components/product';
import subproduct from '../components/subproduct';

const drawer=createStackNavigator({
    registration,
    Login,
    home,
    vendor,
    customer,
    addproduct,
    product,
    subproduct
},{
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false
        }
    ,initialRouteName:'customer'
    }

);

export default createAppContainer(drawer);