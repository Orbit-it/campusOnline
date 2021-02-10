import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';


function Item({ item }) {

    
  return (
    <View style={styles.listItem}>
        <View style = {styles.publier}> 
             <Image source={{uri:item.photo}}  style={{width:50, height:50, borderRadius:30, marginBottom:10}} />
             <Text style={{fontWeight:"bold", marginLeft:10, alignSelf:'center', marginBottom:17}}>{item.name}</Text>
        </View>
      <Image source={{uri:item.photo}}  style={{width:"100%", height:150,}} />
      <View style={{alignItems:"flex-start",flex:1}}>
        <Text style={{fontWeight:"bold",}}>{item.name}</Text>
        <Text style={styles.text}>{item.position}</Text>
      </View>
      <View style= {styles.reaction}>
            <TouchableOpacity style={{height:50,width:50, justifyContent:"center",alignItems:"center"}}>
            <AntDesign name="like2" size={20}  onPress={() => {} } ></AntDesign>
            </TouchableOpacity>
            <TouchableOpacity style={{height:50,width:50, justifyContent:"center",alignItems:"center"}}>
            <FontAwesome name="heart-o" size={20} color="#000" onPress={() => {} } ></FontAwesome>
            </TouchableOpacity>
            <TouchableOpacity style={{height:50,width:50, justifyContent:"center",alignItems:"center"}}>
            <FontAwesome name="comment-o" size={20} color="#000" onPress={() => {} } ></FontAwesome>
            </TouchableOpacity>
      </View>     
    </View>
  );
}

export default class ListNews extends React.Component {
  state = {
    data:[
        {
            "name": "Miyah Myles",
            "email": "miyah.myles@gmail.com",
            "position": "je suis un paragraph je decris du n'importe quoi pour voir ce qui s'adaptent",
            "photo": "https:\/\/images.unsplash.com\/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6"
        },
        {
            "name": "June Cha",
            "email": "june.cha@gmail.com",
            "position": "Sales Manager",
            "photo": "https:\/\/randomuser.me\/api\/portraits\/women\/44.jpg"
        },
        {
            "name": "Iida Niskanen",
            "email": "iida.niskanen@gmail.com",
            "position": "Sales Manager",
            "photo": "https:\/\/randomuser.me\/api\/portraits\/women\/68.jpg"
        },
        {
            "name": "Renee Sims",
            "email": "renee.sims@gmail.com",
            "position": "Medical Assistant",
            "photo": "https:\/\/randomuser.me\/api\/portraits\/women\/65.jpg"
        },
        {
            "name": "Jonathan Nu\u00f1ez",
            "email": "jonathan.nu\u00f1ez@gmail.com",
            "position": "Clerical",
            "photo": "https:\/\/randomuser.me\/api\/portraits\/men\/43.jpg"
        },
        {
            "name": "Sasha Ho",
            "email": "sasha.ho@gmail.com",
            "position": "Administrative Assistant",
            "photo": "https:\/\/images.pexels.com\/photos\/415829\/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb"
        },
        {
            "name": "Abdullah Hadley",
            "email": "abdullah.hadley@gmail.com",
            "position": "Marketing",
            "photo": "https:\/\/images.unsplash.com\/photo-1507003211169-0a1dd7228f2d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=a72ca28288878f8404a795f39642a46f"
        },
        {
            "name": "Thomas Stock",
            "email": "thomas.stock@gmail.com",
            "position": "Product Designer",
            "photo": "https:\/\/tinyfac.es\/data\/avatars\/B0298C36-9751-48EF-BE15-80FB9CD11143-500w.jpeg"
        },
        {
            "name": "Veeti Seppanen",
            "email": "veeti.seppanen@gmail.com",
            "position": "Product Designer",
            "photo": "https:\/\/randomuser.me\/api\/portraits\/men\/97.jpg"
        },
        {
            "name": "Bonnie Riley",
            "email": "bonnie.riley@gmail.com",
            "position": "Marketing",
            "photo": "https:\/\/randomuser.me\/api\/portraits\/women\/26.jpg"
        }
    ]
  }


  render(){
    return (
      <View style={styles.container}>
        <FlatList
          style={{flex:1}}
          data={this.state.data}
          renderItem={({ item }) => <Item item={item}/>}
          keyExtractor={item => item.email}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CBE5F7',
  },
  listItem:{
    margin:5,
    padding:10,
    backgroundColor:"#71AFD2",
    width:"100%",
    flex:1,
    alignSelf:"center",
    flexDirection:"column",
    borderRadius:10
  },
  text: {
      color:'#fff'
  },
  publier: {
    flex:1,
    flexDirection:'row',
  },
  reaction: {
      flex:1,
      flexDirection: 'row'
  },
  menu: {
      textAlign:'right'
  }
});