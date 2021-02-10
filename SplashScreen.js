import React from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    Dimensions,
    StyleSheet,
    StatusBar,
    Image
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '@react-navigation/native';

const SplashScreen = ({navigation}) => {
    const { colors } = useTheme();

    return (
      <View style={styles.container}>
          <StatusBar backgroundColor='#fff' barStyle="light-content"/>
        <View style={styles.header}>
            <Animatable.Image 
                animation="tada"
                duraton="1500"
            source={require('../Image/newlogo.png')}
            style={styles.logo}
            />
            <View style={styles.button}>
            <TouchableOpacity style={[styles.signIn, {backgroundColor:'#00B0F0'}]} onPress={()=>navigation.navigate('SignInScreen')}>
                    <Text style={styles.textSign}>SUIVANT </Text>
                    <View style = {styles.flech}>
                        <MaterialIcons
                            name='navigate-next'
                            color='#fff'
                            size={15}
                        />
                        <MaterialIcons
                            name='navigate-next'
                            color='#fff'
                            size={15}
                        />
                        <MaterialIcons
                            name='navigate-next'
                            color='#fff'
                            size={15}
                        />
                    </View>
            </TouchableOpacity>
            </View>
        </View>
      </View>
    );
};

export default SplashScreen;

const {height} = Dimensions.get("screen");
const height_logo = height * 0.25;

const {width} = Dimensions.get("screen");
const width_logo = width * 0.7;

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#fff'
    },
    header: {
        flex:2,
        justifyContent: 'center',
        alignItems: 'center'

    },
    
    flech:{
        flexDirection:'row-reverse',
    },
    logo: {
        width: width_logo,
        height: height_logo,
    },
    title: {
        color: '#fff',
        fontSize:30,
        fontWeight:'bold',
        alignItems:'center',
        justifyContent:'center',
        marginLeft:28,
        fontFamily:'Roboto'
            },
    text: {
        color: '#fff',
        marginTop:5,
        fontSize: 10,
    },
    button: {
        alignItems:'baseline',
        alignSelf:'flex-end',
        position:'absolute',
        top:height*0.72,
        left:width*0.5,
        
    },
    signIn: {
        width:130,
        height:width*0.11,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:10,
        flexDirection: 'row',
        backgroundColor: '#fff',
        color:'white',
        elevation:5,
    },
    textSign:{
        color: '#fff',
        fontWeight: 'bold',
        fontSize:10
    },
    
    textpub:{
        color: '#ffd700',
        fontWeight: 'bold',
        fontSize:11,
    }
});
