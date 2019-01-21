import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Button, Text, ImageBackground, Image} from 'react-native';
import AIcon from 'react-native-vector-icons/AntDesign';
import EIcon from 'react-native-vector-icons/Entypo';
import {NavigationActions, StackActions} from "react-navigation";

export default class addproduct extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {

            name: '',
            password: '',

        }
    }

    userlogin = () =>{
        //validation here...
        const {username, password} = this.state;
        this.props.userLogin(username, password)
            .then((res)=>{
                //alert({res});
                const {navigation} = this.props;
                navigation.dispatch(StackActions.reset({
                    index: 0,
                    actions: [NavigationActions.navigate({ routeName: 'home' })],
                }));
            }).catch(err=>{
            alert("Login Failed!")
        })
    };

    render() {
        const {navigate}=this.props.navigation;

        return (
            <ImageBackground source={require('./Images/uiImages/background.jpg')} style={styles.backgroundImage} blurRadius={2}>
                <View style={[styles.MainContainer,styles.logocontainer]}>
                    <Image source={require('./Images/uiImages/Company_logo.png')} style={styles.logo}/>

                    <Text style= {styles.title}>Welcome!</Text>

                    <View style={styles.viewsection}>
                        <AIcon name="user" size={30} color="#900" style={styles.usericon}/>
                        <TextInput
                            autoCapitalize="none"
                            placeholder="Enter Product name"
                            placeholderTextColor={'#fa0505'}
                            onChangeText={username => this.setState({username : username})}
                            underlineColorAndroid='transparent'
                            style={styles.TextInputStyleClass}
                        />
                    </View>

                    <View style={styles.viewsection}>
                        <EIcon name="price-tag" size={30} color="#900" style={styles.usericon}/>
                        <TextInput
                            autoCapitalize="none"
                            placeholder="Price"
                            placeholderTextColor={'#fa0505'}
                            onChangeText={username => this.setState({username : username})}
                            underlineColorAndroid='transparent'
                            style={styles.TextInputStyleClass}
                        />
                    </View>

                    <Button title="Login" onPress={this.userlogin} color="#fa0505" />
                    <Button title="Reset" onPress={()=>navigate('registration')} color="#fa0505" />
                </View>
            </ImageBackground>
        );
    }
}
const styles = StyleSheet.create({

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
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
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