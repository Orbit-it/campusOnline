import React from 'react';
import { View, Text, Image, StyleSheet, StatusBar, ScrollView, Dimensions, SafeAreaView} from 'react-native';
import { useTheme } from '@react-navigation/native';
import {Avatar} from 'react-native-paper';
import * as Animatable from 'react-native-animatable';
import Users from '../model/users';
import { AuthContext } from '../components/context';
import CarouselCards from './CarouselCards';
import ListNews from './ListNews'



const HomeScreen = ({navigation}) => {


  const { colors } = useTheme();
 

  const theme = useTheme();


  
    return (
      <View style={{flex:1}}>
        <StatusBar backgroundColor='#0199D1' barStyle='light-content'/>
        <View style={styles.container}>
               
        </View>
        <ListNews/>
      </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#7FA5D7',
    alignItems: 'center',
    justifyContent: 'center',
  },
header: {
    flex:1,
    justifyContent: 'flex-end',
    paddingHorizontal:20,
    paddingBottom:1

},
footerDarkTheme: {
    flex:10,
    backgroundColor:'#333333',
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    paddingHorizontal:20,
    paddingVertical:30
},
footerStandardTheme: {
    flex:10,
    backgroundColor:'#fff',
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    paddingHorizontal:20,
    paddingVertical:30
},
text_headerDark: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize:25,
    alignSelf:'center'
},

text_headerStandard: {
    color: 'black',
    fontWeight: 'bold',
    fontSize:30,
    alignSelf:'center'
},
text_footerDark: {
    color: '#fff',
    fontSize:18,
    alignSelf:'center',
    fontWeight: 'bold'
},
text_footerStandard: {
    color: 'black',
    fontSize:18,
    alignSelf:'center',
    fontWeight: 'bold'
}
});


