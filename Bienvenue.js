import React, { Component } from 'react';
import { 
    View, 
    Text, 
    Image, 
    TouchableOpacity, 
    Dimensions,
    StyleSheet,
    StatusBar
} from 'react-native';
const {height} = Dimensions.get("screen");
const {width} = Dimensions.get("screen");

const Bienvenue = ({navigation}) => {

    return (
      <View style={styles.container}>
          <StatusBar backgroundColor='#fff' barStyle="light-content"/>
            <Text style={styles.text_header}>Bienvenu !!!</Text>
            <Text style = {styles.username}>Nars Bonguima</Text>
            <TouchableOpacity
             onPress={() =>{}}
             style={[{
                 marginTop: 15,
                 elevation:20,
             }]}
            >
                    <Image
                style={styles.picProfile}
                source={require('../Image/nars.jpg')}
                />
            </TouchableOpacity>
    
            <TouchableOpacity style={[styles.signIn2, {backgroundColor:'#00B0F0'}]} onPress={()=>{navigation.navigate('MainTabScreen01')}}>
                    <Text style={styles.textSign2}>Terminer</Text>
            </TouchableOpacity>
    </View>  
    );
};

export default Bienvenue;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#fff',
      justifyContent: 'center',
    },
    text_header: {
        fontSize:50,
        color:'#00B0F0',
        alignSelf:'center',
        position:'absolute',
        top:height*0.1
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
        position:'absolute',
        bottom:height*0.1,
        right:width*0.1
    },
    textSign2:{
        color: '#fff',
        fontWeight: 'bold',
        alignSelf:'center',
        justifyContent:'center',
        fontSize:20
    },
    username:{
        fontSize:25,
        alignSelf:'center',
        position:'absolute',
        top:height*0.21
    },
      picProfile:{
          height:150,
          width:150,
          borderRadius:75,
          alignSelf:'center'

      }
  });
