import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import Fondation from 'react-native-vector-icons/Foundation';

import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import Map from './Map';
import ChatScreen from './ChatScreen';
import ForumScreen from './ForumScreen';


const HomeStack = createStackNavigator();
const LikesStack = createStackNavigator();
const WinkStack = createStackNavigator();
const FlytoomeStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
    <Tab.Navigator
      initialRouteName="Accuiel"
      activeColor="#fff"
    >
      <Tab.Screen
        name="Accueil"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Accueil',
          tabBarColor: '#00B0F0',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={MapStackScreen}
        options={{
          tabBarLabel: 'Recherche',
          tabBarColor: '#00B0F0',
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="search" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Map"
        component={ProfileStackScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarColor: '#00B0F0',
          tabBarIcon: ({ size,color }) => (
            <FontAwesome name="user" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen = ({navigation}) => (
<HomeStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: '#00B0F0',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold',
        }
    }}>
        <HomeStack.Screen name="Campus Online" component={HomeScreen} options={{
        title:'Campus Online',
        headerLeft: () => (
            <MaterialCommunityIcons.Button
             name="dots-vertical"
             size={40} 
             backgroundColor="#00B0F0" 
             onPress={() => navigation.openDrawer()}>
             </MaterialCommunityIcons.Button>

        ),
        headerRight: () => (
            <FontAwesome.Button 
            name="university" 
            color='#FFC000'
            size={25} 
            backgroundColor="#00B0F0" 
            onPress={() => {} } >

            </FontAwesome.Button>
        )
        }} />
</HomeStack.Navigator>
);

const MapStackScreen = ({navigation}) => (
<LikesStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: '#00B0F0',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        }
    }}>
        <LikesStack.Screen name="Campus Online" component={Map} options={{
        headerLeft: () => (
          <MaterialCommunityIcons.Button
           name="dots-vertical"
           size={40} 
           backgroundColor="#00B0F0" 
           onPress={() => navigation.openDrawer()}>
           </MaterialCommunityIcons.Button>

      ),
      headerRight: () => (
          <Fondation.Button 
          name="graph-bar" 
          color='yellow'
          size={40} 
          backgroundColor="#00B0F0" 
          onPress={() => {} } >

          </Fondation.Button>
      )
      }} />
</LikesStack.Navigator>
);

const ProfileStackScreen = ({navigation}) => (
  <WinkStack.Navigator screenOptions={{
          headerStyle: {
          backgroundColor: '#00B0F0',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
          fontWeight: 'bold'
          }
      }}>
          <WinkStack.Screen name="Campus Online" component={ProfileScreen} options={{
           headerLeft: () => (
            <MaterialCommunityIcons.Button
             name="dots-vertical"
             size={40} 
             backgroundColor="#00B0F0" 
             onPress={() => navigation.openDrawer()}>
             </MaterialCommunityIcons.Button>

        ),
        headerRight: () => (
            <Fondation.Button 
            name="graph-bar" 
            color='yellow'
            size={40} 
            backgroundColor="#00B0F0" 
            onPress={() => {} } >

            </Fondation.Button>
        )
        }} />
  </WinkStack.Navigator>
  );
