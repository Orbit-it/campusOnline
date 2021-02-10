import React, { Component } from 'react';
import { 
    View, 
    Text, 
    Button, 
    TouchableOpacity, 
    Dimensions,
    TextInput,
    Platform,
    StyleSheet,
    ScrollView,
    StatusBar
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import { FlatList } from 'react-native-gesture-handler';
import ContriesList from './ContriesList';
import { Container, ListItem } from 'native-base';

const {height} = Dimensions.get("screen");
const {width} = Dimensions.get("screen");

const SignInScreen = ({navigation}) => {

   

    const [data, setData] = React.useState({
        email: '',
       phone_number: '',
        ref_flytoome: '',
        check_textInputChange: false,
        secureTextEntry: true,
        confirm_secureTextEntry: true,
    });

    const renderItem = ({ item }) => (
        <Item title={item.title} />
      );

   

    const textInputChange = (val) => {
        let mailform = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if( mailform.test(val) === true ) {
            setData({
                ...data,
                email: val,
                check_textInputChange: true
            });
        } else {
            setData({
                ...data,
                email: val,
                check_textInputChange: false
            });
        }
    }

    const handlePasswordChange = (val) => {
        setData({
            ...data,
           phone_number: val
        });
    }

    const handleConfirmPasswordChange = (val) => {
        setData({
            ...data,
            ref_flytoome: val
        });
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    const updateConfirmSecureTextEntry = () => {
        setData({
            ...data,
            confirm_secureTextEntry: !data.confirm_secureTextEntry
        });
    }

    return (
      <View style={styles.container}>
          <StatusBar backgroundColor='#fff' barStyle="light-content"/>
            <Text style={styles.text_header}>Inscription</Text>
            <View style={styles.button}>
                 <TouchableOpacity
                    onPress={() =>{}}
                    style={[styles.signIn, {
                        borderColor: '#00B0F0',
                        borderWidth: 1,
                        marginTop: 15,
                        elevation:7,
                        backgroundColor:'#fff'
                    }]}
                >
                    <TextInput 
                    placeholder="Nom de Famille"
                    placeholderTextColor='grey'
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(val) => textInputChange(val)}
                />
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {}}
                    style={[styles.signIn, {
                        borderColor: '#00B0F0',
                        borderWidth: 1,
                        marginTop: 15,
                        elevation:7,
                        backgroundColor:'#fff'
                    }]}
                >
                    <TextInput 
                    placeholder="Prénom"
                    placeholderTextColor='grey'
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(val) => textInputChange(val)}
                />
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {}}
                    style={[styles.signIn, {
                        borderColor: '#00B0F0',
                        borderWidth: 1,
                        marginTop: 15,
                        elevation:7,
                        backgroundColor:'#fff'
                    }]}
                >
                    <TextInput 
                    placeholder="Date de Naissance"
                    placeholderTextColor='grey'
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(val) => textInputChange(val)}
                />
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {}}
                    style={[styles.signIn, {
                        borderColor: '#00B0F0',
                        borderWidth: 1,
                        marginTop: 15,
                        elevation:7,
                        backgroundColor:'#fff'
                    }]}
                >
                    <TextInput 
                    placeholder="Adresse Email ou Téléphone"
                    placeholderTextColor='grey'
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(val) => textInputChange(val)}
                />
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {}}
                    style={[styles.signIn, {
                        borderColor: '#00B0F0',
                        borderWidth: 1,
                        marginTop: 15,
                        elevation:7,
                        backgroundColor:'#fff'
                    }]}
                >
                    <Text style={[styles.textSign3, {
                        color: 'grey'
                    }]}>Nationalité</Text>
                    <View style={styles.down}>
                    <AntDesign
                            name='caretdown'
                            color='#000'
                            size={18}
                            
                        />
                        </View>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {}}
                    style={[styles.signIn, {
                        borderColor: '#00B0F0',
                        borderWidth: 1,
                        marginTop: 15,
                        elevation:7,
                        backgroundColor:'#fff'
                    }]}
                >
                    <Text style={[styles.textSign3, {
                        color: 'grey',
                        textAlign:'left'
                    }]}>Pays de résidence</Text>
                    <View style={styles.down}>
                    <AntDesign
                            name='caretdown'
                            color='#000'
                            size={18}
                            
                        />
                        </View>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={[styles.signIn2, {backgroundColor:'#00B0F0'}]} onPress={()=>navigation.navigate('SignUpScreen2')}>
                    <Text style={styles.textSign2}>Suivant</Text>
            </TouchableOpacity>
    </View>  
    );
};

export default SignInScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#fff',
      justifyContent: 'center',
    },
    text_header: {
        fontSize:40,
        color:'#000',
        position:'absolute',
        top:height*0.01,
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center'

    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        paddingTop:5,
        color: '#00B0F0',
    },
    button: {
        alignItems: 'center',
        marginTop: 10
    },
    signIn: {
        width: '90%',
        height: height*0.06,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        flexDirection:'row',
        alignContent:'space-between'
    },
    signIn2: {
        width:'40%',
        height:height*0.07,
        justifyContent: 'center',
        alignSelf:'center',
        borderRadius:10,
        flexDirection: 'row',
        backgroundColor: '#fff',
        color:'white',
        marginTop:30,
        elevation:7,
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    textSign2:{
        color: '#fff',
        fontWeight: 'bold',
        alignSelf:'center',
        justifyContent:'center',
        fontSize:20
    },
    textSign3:{
        color:'grey',
        fontSize:15,
        position:'absolute',
        left:width*0.03
        

    },
    textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 15
    },
    color_textPrivate: {
        color: 'grey'
    },
    pays: {
        backgroundColor: '#00B0F0',
        padding: 10,
        marginVertical: 4,
        marginHorizontal: 16,
      },
      down:{
          elevation:5,
          position:'absolute',
          right:width*0.05
      }
  });


// Algorithme de Recherche binaire d'un array
          /*  const binarySearch = (array, thingToFing, start, end) => {
                if (start > end){
                    return false;
                }
                let mid = Math.floor((start + end) / 2);
                if (array[mid] === thingToFing){
                    return true;
                }
                if (thingToFing < array[mid]) {
                    return binarySearch (array, thingToFing, start, mid - 1);
                }else {
                    return binarySearch (array, thingToFing, mid + 1, end);
                }
            }   
                */