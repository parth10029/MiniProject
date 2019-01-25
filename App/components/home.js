import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    Button,
    Text,
    ImageBackground,
    Image,
    AsyncStorage,
    TouchableOpacity
} from 'react-native';
import {connect} from "react-redux";


export default class home extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {
        }
    }
    componentWillMount(){
        this.getData()
    }
    getData = async()=>{
        try {
            const value = await AsyncStorage.getItem('user');
            //alert(value)
            debugger
            if(value == null){
                this.props.navigation.navigate('Login');
            } else {
                debugger
                let parsedValue = JSON.parse(value)
                if (parsedValue.user_type === 'vendor') {
                    this.props.navigation.navigate('vendor');
                    // We have data!!
                    //console.log(value);
                }
                else if(parsedValue.user_type === 'customer'){
                    this.props.navigation.navigate('customer');
                }
            }
        } catch (error) {
            // Error retrieving data
        }
    }

    render() {
        return (
            <ImageBackground source={require('./Images/uiImages/background.jpg')} style={styles.backgroundImage} blurRadius={2}>
                <View style={[styles.MainContainer,styles.logocontainer]}>
                    <Image source={require('./Images/uiImages/Company_logo.png')} style={styles.logo}/>

                    <Text style= {styles.title}>Welcome!</Text>

                </View>
            </ImageBackground>
        );
    }
}
const styles = StyleSheet.create({
    touchabletext:{
        color:'#fa0505',
        fontWeight: "bold",
        textAlign:"center"
    },
    touchpic:{
        flexDirection: 'row',
        width:200,
        height:200,
        alignItems: 'center',
    },

    backgroundImage:{
        flex:1,
        resizeMode: 'cover',
        alignSelf: 'stretch',
        width:null,
        padding:10,
    },
    logo:{
        width:240,
        height:240,
    },

    logocontainer:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    MainContainer :{
        justifyContent: 'center',
        margin: 10
    },

    viewsection:{
        flex:1,
        flexDirection: 'row',
    },

    usericon:{
        padding: 6,
    },

    TextInputStyleClass: {
        textAlign: 'center',
        marginBottom: 7,
        height: 40,
        flex:1,
        alignSelf:'stretch',
        fontWeight:'bold',
        borderWidth: 1,
        borderColor: '#000000',
        borderRadius: 5 ,
        backgroundColor:'#ffffff',
        color: '#424242',
    },

    title:{
        fontSize: 22,
        color: "#fa0505",
        textAlign: 'center',
        marginBottom: 15
    }
});