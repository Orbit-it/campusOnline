import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from './SplashScreen';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';
import SignUpScreen2 from './SignUpScreen2';
import Bienvenue from './Bienvenue';
import MainTabScreen01 from './MainTabScreen01'

const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
    <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name="SplashScreen" component={SplashScreen}/>
        <RootStack.Screen name="SignInScreen" component={SignInScreen}/>
        <RootStack.Screen name="SignUpScreen" component={SignUpScreen}/>
        <RootStack.Screen name="SignUpScreen2" component={SignUpScreen2}/>
        <RootStack.Screen name="Bienvenue" component={Bienvenue}/>
        <RootStack.Screen name="MainTabScreen01" component={MainTabScreen01}/>
    </RootStack.Navigator>
);

export default RootStackScreen;