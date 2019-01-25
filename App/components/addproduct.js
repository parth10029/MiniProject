import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    Button,
    Text,
    ImageBackground,
    Image,
    TouchableOpacity,
} from 'react-native';
import FIcon from 'react-native-vector-icons/Feather';
import EIcon from 'react-native-vector-icons/Entypo';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';
import {NavigationActions, StackActions} from "react-navigation";
import ImagePicker from "react-native-image-picker";
import AwesomePicker from 'react-native-awesome-picker';
import constant from '../helper/themeHelper';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import {showsubproduct} from "../actions/sub_productActions";
import index from "react-native-picker";

class addproduct extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            language:'',
            pickedImage: null,
            refreshing:false,
            product_type: '',
        }
    }

    // componentDidMount(){
    //     this.props.showsubproduct(this.state.subproduct.id)
    // }

    // keyExtractor = (item) => {
    //     return item.id + "";
    // };
    //
    // renderSeparator = ({leadingItem, section})=>{
    //     return <View style={{height:10}}/>;
    // };
    //
    // renderEmpty = () => {
    //     return <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
    //         <Text style={{fontSize:15}}>
    //             {"No data found"}
    //         </Text>
    //     </View>
    // };
    //
    // onRefresh = () => {
    //     debugger
    //     this.setState({refreshing: true});
    //     debugger
    //     this.props.showsubproduct(this.state.subproduct.id).then(res=>{
    //         this.setState({refreshing: false});
    //     });
    // };

    //image picker
    reset = () => {
        this.setState({
            pickedImage: null
        });
    }

    pickImageHandler = () => {
        ImagePicker.showImagePicker({title: "Pick an Image", maxWidth: 800, maxHeight: 600}, res => {
            if (res.didCancel) {
                console.log("User cancelled!");
            } else if (res.error) {
                console.log("Error", res.error);
            } else {
                this.setState({
                    pickedImage: { uri: res.uri }
                });

            }
        });
    }
    //end of image picker

    resetHandler = () =>{
        this.reset();
    }

    render() {
        const {refreshing} = this.state;
        const {subproductList} = this.props;
        const {subproductdetail} = this.props;
        const {subproduct}= this.props.navigation.state.params.subproductdetail;
       // console.log(this.props);
        return (
            <ImageBackground source={require('./Images/uiImages/background.jpg')} style={styles.backgroundImage} blurRadius={2}>
                <View style={[styles.MainContainer,styles.logocontainer]}>
                    <Image source={require('./Images/uiImages/Company_logo.png')} style={styles.logo}/>
                    <Text style={{color:'red'}}>Fill the Product form</Text>
                    <View style={styles.viewsection}>
                        <FIcon name="type" size={30} color="#900" style={styles.usericon}/>
                        <TextInput
                            placeholder="Product Name"
                            placeholderTextColor={'#fa0505'}
                            onChangeText={username => this.setState({username : username})}
                            underlineColorAndroid='transparent'
                            style={styles.TextInputStyleClass}
                        />
                    </View>

                    <View style={styles.viewsection}>
                        <EIcon name="price-tag" size={30} color="#900" style={styles.usericon}/>
                        <TextInput
                            placeholder="Price"
                            placeholderTextColor={'#fa0505'}
                            onChangeText={username => this.setState({username : username})}
                            underlineColorAndroid='transparent'
                            style={styles.TextInputStyleClass}
                        />
                    </View>

                    <View style={styles.viewsection}>
                        <MCIcon name="account-card-details" size={30} color="#900" style={styles.usericon}/>
                        <TextInput
                            placeholder="Details"
                            placeholderTextColor={'#fa0505'}
                            onChangeText={username => this.setState({username : username})}
                            underlineColorAndroid='transparent'
                            style={styles.TextInputStyleClass}
                        />
                    </View>

                    <View style={styles.viewsection}>
                        <MIcon name="devices-other" size={30} color="#900" style={styles.usericon}/>
                        <RadioGroup
                            onSelect = {(index, value) => {this.setState({product_type:value});
                                this.props.showsubproduct(this.state.product_type).then(res=>{
                                    this.setState({refreshing: false});})}}
                            size={20}
                            thickness={2}
                            color={'#fa0505'}
                            selectedIndex={1}
                            style={{flexDirection:'row'}}
                        >
                            <RadioButton value={'1'}>
                                <Text>Tablet</Text>
                            </RadioButton>

                            <RadioButton value={'2'}>
                                <Text>computer</Text>
                            </RadioButton>

                            <RadioButton value={'3'}>
                                <Text>mobile</Text>
                            </RadioButton>

                            <RadioButton value={'4'}>
                                <Text>wearable</Text>
                            </RadioButton>

                        </RadioGroup>
                    </View>

                    <View style={styles.viewsection}>
                    <FAIcon name="product-hunt" size={30} color="#900" style={styles.usericon}/>
                    <View style={styles.container12}>
                        <AwesomePicker
                            //selectedValue={}
                            onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue, itemIndex})}
                            data={subproductList}
                            contentContainerStyle={{top:20}}
                            automaticallyAdjustContentInsets={false}
                        >
                            {subproductList.map((item,index)=>{
                                <AwesomePicker.Item label={item.name} value={item.name}/>
                            })}

                            {/*<AwesomePicker.Item label="JavaScript" value="js"/>*/}
                        </AwesomePicker>
                    </View>
                    </View>

                    <View>
                        <View style={styles.container11}>
                            <View style={styles.placeholder11}>
                                <Image source={this.state.pickedImage} style={styles.previewImage11} />
                            </View>
                            <View style={styles.button11}>

                                <Button title="Pick Image" onPress={this.pickImageHandler} />

                                <Button title="Reset" onPress={this.resetHandler} />

                            </View>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        );
    }

}
const styles = StyleSheet.create({

    container12: {
        justifyContent: 'center',
        textAlign: 'center',
        marginBottom: 7,
        height: 40,
        flex:1,
        alignSelf:'stretch',
        fontWeight:'bold',
        borderWidth: 1,
        borderColor: '#fa0505',
        borderRadius: 5 ,
        backgroundColor:'#ffffff',
        color: '#424242',
    },

    //
    container11: {
        alignItems:"center"
    },
    placeholder11: {
        borderWidth: 1,
        borderColor: "black",
        backgroundColor: "#eee",
        width: "70%",
        height: 180,
        marginTop:50,
    },
    button11: {
        width: "80%",
        marginTop:20,
        flexDirection:"row",
        justifyContent: "space-around"
    },
    previewImage11: {
        width: "100%",
        height: "100%"
    },
    //
    touchpic:{
        flexDirection: 'row',
        width:190,
        height:190,
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
        borderColor: '#fa0505',
        borderRadius: 5 ,
        backgroundColor:'#ffffff',
        color: '#424242',
    },
    MainContainer1: {
        justifyContent: 'center',
        flex: 1,
        paddingTop: 30,
    },

    imageThumbnail: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
    },

    title:{
        fontSize: 22,
        color: "#fa0505",
        textAlign: 'center',
        marginBottom: 15
    }
});
const mapStateToProps = (state) => {
    const {loading,subproductList} = state.onRefreshsubproduct;
    return {
        loading,
        subproductList
    };
};

export default connect(mapStateToProps,{
    showsubproduct
})(addproduct);