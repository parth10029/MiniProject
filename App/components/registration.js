import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Button, Text, ImageBackground, Image} from 'react-native';
//import {createStackNavigator,createAppContainer} from 'react-navigation';
import Login from './Login';

export default class registration extends Component<Props> {

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


    UserRegistrationFunction = () =>{
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({

                name: this.state.name,

                email: this.state.email,

                username: this.state.username,

                user_type: this.state.user_type,

                password: this.state.password

            })
        }).then((response) => response.json())
            .then((responseJson) => {

                // Showing response message coming from server after inserting records.
                //alert(JSON.stringify(responseJson));
                this.props.navigation.navigate('Login');
            }).catch((error) => {
            console.error(error);
        });

    }

    render() {
        return (
            <ImageBackground source={require('./Images/uiImages/background.jpg')} style={styles.backgroundImage} blurRadius={2}>
                <View style={[styles.MainContainer,styles.logocontainer]}>
                    <Image source={require('./Images/uiImages/Company_logo.png')} style={styles.logo}/>
                    <Text style= {styles.title}>User Registration Form</Text>
                    {/*<Icon name={"user"} size={30}/>*/}
                    <TextInput
                        placeholder="Enter User Name"
                        onChangeText={name => this.setState({name : name})}
                        underlineColorAndroid='transparent'
                        placeholderTextColor={'#fa0505'}
                        style={styles.TextInputStyleClass}
                    />

                    <TextInput
                        placeholder="Enter User Email"
                        onChangeText={email => this.setState({email : email})}
                        underlineColorAndroid='transparent'
                        placeholderTextColor={'#fa0505'}
                        style={styles.TextInputStyleClass}
                    />

                    <TextInput
                        placeholder="Enter User UserName"
                        placeholderTextColor={'#fa0505'}
                        onChangeText={username => this.setState({username : username})}
                        underlineColorAndroid='transparent'
                        style={styles.TextInputStyleClass}
                    />

                    <TextInput
                        placeholder="Enter User type"
                        onChangeText={usertype => this.setState({user_type : usertype})}
                        placeholderTextColor={'#fa0505'}
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
                    {/*<switch disabled={false}*/}
                    {/*activeText={'On'}*/}
                    {/*inActiveText={'Off'}*/}
                    {/*circleSize={30}*/}
                    {/*barHeight={1}*/}
                    {/*circleBorderWidth={3}>*/}
                    {/*<Text> Terms & condition</Text>*/}
                    {/*</switch>*/}

                    <Button title="Submit" onPress={this.UserRegistrationFunction} color="#fa0505" />
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