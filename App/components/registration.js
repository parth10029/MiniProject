import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Button, Text, ImageBackground, Image, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';

import { Switch } from 'react-native-switch';
import {NavigationActions,StackActions} from 'react-navigation';
import {emailEmpty,passwordEmpty,checkEmail} from '../validation/Validation';
import Login from './Login';
import AIcon from 'react-native-vector-icons/AntDesign';
import FIcon from 'react-native-vector-icons/FontAwesome';
import EIcon from 'react-native-vector-icons/Entypo';
import FEIcon from 'react-native-vector-icons/Feather';
//import MIcon from 'react-native-vector-icons/MaterialIcons';
import {userRegistration} from '../actions/registrationActions';
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button';


 class registration extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            name: '',
            email: '',
            user_type: '',
            password: '',
            tnc:false
        }
    }
    register = () =>{
        //validation here...
        const {username, name, email, user_type,password} = this.state;
        this.props.userRegistration({username, name, email, user_type,password})
            .then((res)=>{
            const {navigation} = this.props;
            navigation.dispatch(StackActions.reset({
                index: 0,
                actions: [NavigationActions.navigate({ routeName: 'Login' })],
            }));
        }).catch(err=>{
            alert("Registration Failed!")
        })
    };

    render() {
        const { loading } = this.props;
        return (
            <ImageBackground source={require('./Images/uiImages/background.jpg')} style={styles.backgroundImage} blurRadius={2}>
                <View style={[styles.MainContainer,styles.logocontainer]}>
                    <Image source={require('./Images/uiImages/Company_logo.png')} style={styles.logo}/>

                    <Text style= {styles.title}>User Registration Form</Text>

                    <View style={styles.viewsection}>
                        <AIcon name="user" size={30} color="#900" style={styles.usericon}/>
                    <TextInput
                        placeholder="Enter User Name"
                        onChangeText={name => this.setState({name : name})}
                        underlineColorAndroid='transparent'
                        placeholderTextColor={'#fa0505'}
                        style={styles.TextInputStyleClass}
                    />
                    </View>

                    <View style={styles.viewsection}>
                        <EIcon name="email" size={30} color="#900" style={styles.usericon}/>
                    <TextInput
                        placeholder="Enter User Email"
                        onChangeText={email => this.setState({email : email})}
                        underlineColorAndroid='transparent'
                        placeholderTextColor={'#fa0505'}
                        style={styles.TextInputStyleClass}
                    />
                    </View>

                    <View style={styles.viewsection}>
                        <EIcon name="user" size={30} color="#900" style={styles.usericon}/>
                    <TextInput
                        placeholder="Enter User UserName"
                        placeholderTextColor={'#fa0505'}
                        onChangeText={username => this.setState({username : username})}
                        underlineColorAndroid='transparent'
                        style={styles.TextInputStyleClass}
                    />
                    </View>

                    <View style={styles.viewsection}>
                        <FEIcon name="type" size={30} color="#900" style={styles.usericon}/>
                        <RadioGroup
                            onSelect = {(index, value) => {this.setState({user_type:value})}}
                            size={20}
                            thickness={2}
                            color={'#fa0505'}
                            selectedIndex={1}
                            style={{flexDirection:'row'}}
                        >
                            <RadioButton value={'customer'}>
                                <Text>Customer</Text>
                            </RadioButton>

                            <RadioButton value={'vendor'}>
                                <Text>Vendor</Text>
                            </RadioButton>

                        </RadioGroup>
                    </View>


                    {/*<View style={styles.viewsection}>*/}
                        {/*<FEIcon name="type" size={30} color="#900" style={styles.usericon}/>*/}
                    {/*<TextInput*/}
                        {/*placeholder="Enter User type"*/}
                        {/*onChangeText={usertype => this.setState({user_type : usertype})}*/}
                        {/*placeholderTextColor={'#fa0505'}*/}
                        {/*underlineColorAndroid='transparent'*/}
                        {/*style={styles.TextInputStyleClass}*/}
                    {/*/>*/}
                    {/*</View>*/}

                    <View style={styles.viewsection}>
                        <FIcon name="user-secret" size={30} color="#900" style={styles.usericon}/>
                    <TextInput
                        placeholder="Enter User Password"
                        onChangeText={password => this.setState({password : password})}
                        placeholderTextColor={'#fa0505'}
                        underlineColorAndroid='transparent'
                        style={styles.TextInputStyleClass}
                        secureTextEntry={true}
                    />
                    </View>

                    <View style={styles.viewsection}>
                        <Text style={{padding:10,color:'#fa0505'}}>Terms & condition</Text>
                    <Switch
                        value={this.state.tnc}
                        onValueChange={(tnc) => this.setState({tnc})}
                        disabled={false}
                        activeText={'On'}
                        inActiveText={'Off'}
                        circleSize={30}
                        backgroundActive={'red'}
                        backgroundInactive={'lightgray'}
                        circleActiveColor={'pink'}
                        circleInActiveColor={'lightpink'}
                        // // renderInsideCircle={() => <CustomComponent />}
                        // changeValueImmediately={true}
                        // innerCircleStyle={{ alignItems: "center", justifyContent: "center" }}
                        // outerCircleStyle={{}}
                        // renderActiveText={false}
                        // renderInActiveText={false}
                        // switchLeftPx={2}
                        // switchRightPx={2}
                        // switchWidthMultiplier={2}
                    />
                    </View>

                    <TouchableOpacity style={styles.button} onPress={this.register} >
                    <View style={styles.viewsection}>
                        <EIcon name="add-user" size={30} color="#900" style={styles.usericon}/>
                        <Text color="#fa0505">Submit</Text>
                    </View>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        );
    }
}
const styles = StyleSheet.create({

    button: {
        width:'99%',
        alignItems: 'center',
        backgroundColor: '#F9BCBC',
        padding: 10
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
const mapStateToProps = (state) => {
    const {loading} = state.reg_user;
    return {
        loading
    };
};

export default connect(mapStateToProps,{
    userRegistration
})(registration);
