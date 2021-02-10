/* Lien pour générer un nouveau identifiant <TouchableOpacity>
                <Text style={{color: '#00B0F0', marginTop:15}}>Identifiant oublier?</Text>
            </TouchableOpacity> */

import React from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    TextInput,
    Platform,
    StyleSheet ,
    StatusBar,
    Alert
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';

import { useTheme } from 'react-native-paper';

import { AuthContext } from '../components/context';

import Users from '../model/users';
import { Dimensions } from 'react-native';

const SignInScreen = ({navigation}) => {

    const [data, setData] = React.useState({
        Identifiant: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        isValidUser: true,
        isValidPassword: true,
    });

    const { colors } = useTheme();

    const { signIn } = React.useContext(AuthContext);

    const textInputChange = (val) => {
        if( val.trim().length >= 8 ) {
            setData({
                ...data,
                Identifiant: val,
                check_textInputChange: true,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                Identifiant: val,
                check_textInputChange: false,
                isValidUser: false
            });
        }
    }

    const handlePasswordChange = (val) => {
        if( val.trim().length >= 8 ) {
            setData({
                ...data,
                password: val,
                isValidPassword: true
            });
        } else {
            setData({
                ...data,
                password: val,
                isValidPassword: false
            });
        }
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    const handleValidUser = (val) => {
        if( val.trim().length >= 4 ) {
            setData({
                ...data,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                isValidUser: false
            });
        }
    }

    const loginHandle = (Identifiant) => {

        const foundUser = Users.filter( item => {
            return Identifiant == item.Identifiant;
        } );

        if ( data.Identifiant.length == 0) {
            Alert.alert('Aucun Identifiant!', 'Votre Identifiant est obligatoire pour vous connecter.', [
                {text: 'Ressayer'}
            ]);
            return;
        }

        if ( foundUser.length == 0 ) {
            Alert.alert('Identifiant invalide!', "L'Identifiant saisi est erroné.", [
                {text: 'Ressayer'}
            ]);
            return;
        }
        signIn(foundUser);
    }

    return (
      <View style={styles.container}>
          <StatusBar backgroundColor='#fff' barStyle="light-content"/>
        <View style = {styles.header_logo} >
            <Text style={styles.text_logo_name}>Inscription</Text>
        </View>
            <View style={styles.button}>
            <TouchableOpacity
                    onPress={() => navigation.navigate('SignUpScreen')}
                    style={[styles.signIn, {
                        borderColor: '#00B0F0',
                        borderWidth: 1,
                        backgroundColor:'#fff'
                    }]}
                >
                    <Text style={[styles.textSign, {
                        color: '#000'
                    }]}>Compte utilisateurs</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate('SignUpScreen')}
                    style={[styles.signIn, {
                        borderColor: '#00B0F0',
                        borderWidth: 1,
                        backgroundColor:'#fff'
        
                    }]}
                >
                    <Text style={[styles.textSign, {
                        color: '#000'
                    }]}>Compte client</Text>
                </TouchableOpacity>
            </View>
            <View style = {styles.descript}>
                <Text style = {[styles.text_descript,{textAlign:'justify'}]}>Le <Text style = {styles.href}>compte utilisateur</Text> vous permet de découvrir et interagir avec des nombreux établissements publics et privés, des organisms  de soutien, d’orientation et d’accompagnement ainsi que des nombreux autres utilisateurs. Il vous permet également de découvrir une nouvelle facette du pays où vous vous trouvez, de celui où vous comptez vous rendre et de s’y intégrer rapidement.{"\n"}
                 Le <Text style = {styles.href}>compte client</Text> est réservé aux établissements, organisms et autres partenaires.</Text>
            </View>
            <View style = {styles.text_copyright}>
                <Text style = {styles.camp}>Campus online <Text style = {styles.cop}>COPYRIGHT 2021</Text> </Text>
                
            </View>
      </View>
    );
};

export default SignInScreen;

const {height} = Dimensions.get('screen');
const {width} = Dimensions.get('screen');

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor:'#fff'
    },
    header: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
        marginLeft: 10,
        paddingHorizontal: 10,
        paddingBottom: 10
    },
    header_logo : {
        alignItems:'center'

    },
    text_logo_name : {
        fontSize:40,
        color:'#000',
        justifyContent:'center',
        alignItems:'center',

    },
    footer: {
        flex: 2,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontSize: 20,
        marginTop:80,
    },
    text_descript: {
        color: 'grey',
        fontSize: 15
    },
    text_copyright:{
        position:'absolute',
        top: height*0.83,
        flexDirection:'row',
        alignSelf:'center'
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#00B0F0',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50,
    },
    signIn: {
        width: '90%',
        height: height*0.06,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginVertical:8,
        elevation:10
    },
    textSign: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    descript: {
        marginTop:10,
        marginBottom:10,
        marginHorizontal:15,
        textAlign:'right'
    },
    camp: {
        color:'#00B0F0',
        fontWeight:'bold',
        fontSize:15,
    },
    cop: {
        fontWeight:'bold',
        marginLeft:5,
        color:'#000',
        fontSize:12
    },
    href : {
        color:'#00B0F0',
        fontSize:17
    }    

  });
