import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Button, Text, ImageBackground, Image} from 'react-native';

export default class Login extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            name: '',
            email: '',
            usertype: '',
            password: '',
        }
    }

    UserLoginFunction = () =>{

        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
              body: JSON.stringify({

                username: this.state.username,

                password: this.state.password
            })
        }).then((response) => response.json())
            .then((responseJson) => {
                // Showing response message coming from server after inserting records.
                // alert(responseJson);
                this.props.navigation.navigate('home');

            }).catch((error) => {
            console.error(error);
        });

    }

    render() {
        const {navigate}=this.props.navigation;

        return (
            <ImageBackground source={require('./Images/uiImages/background.jpg')} style={styles.backgroundImage} blurRadius={2}>
                <View style={[styles.MainContainer,styles.logocontainer]}>
                    <Image source={require('./Images/uiImages/Company_logo.png')} style={styles.logo}/>
                    <Text style= {styles.title}>Welcome!</Text>

                    <TextInput
                        placeholder="Enter User UserName"
                        placeholderTextColor={'#fa0505'}
                        onChangeText={username => this.setState({username : username})}
                        underlineColorAndroid='transparent'
                        style={styles.TextInputStyleClass}
                    />

                    <TextInput
                        placeholder="Enter User Password"
                        onChangeText={password => this.setState({password : password})}
                        placeholderTextColor={'#fa0505'}
                        underlineColorAndroid='transparent'
                        style={styles.TextInputStyleClass}
                        secureTextEntry={true}
                    />
                    <Button title="Login" onPress={this.UserLoginFunction} color="#fa0505" />
                    <Button title="Register" onPress={()=>navigate('registration')} color="#fa0505" />
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

    TextInputStyleClass: {
        textAlign: 'center',
        marginBottom: 7,
        height: 40,
        alignSelf:'stretch',
        fontWeight:'bold',
        borderWidth: 1,
        borderColor: '#000000',
        borderRadius: 5 ,
        backgroundColor:'#ffffff'
    },

    title:{
        fontSize: 22,
        color: "#fa0505",
        textAlign: 'center',
        marginBottom: 15
    }
});