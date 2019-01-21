import { createStackNavigator, createAppContainer } from 'react-navigation';
import Login from '../components/Login';
import registration from '../components/registration';
import home from '../components/home';
import vendor from '../components/vendor';
import customer from '../components/customer';
import addproduct from '../components/addproduct'

const drawer=createStackNavigator({
    registration,
    Login,
    home,
    vendor,
    customer,
    addproduct
},{
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false
        }
    ,initialRouteName:'addproduct'
    }

);

export default createAppContainer(drawer);