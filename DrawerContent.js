import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import{ AuthContext } from '../components/context';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export function DrawerContent(props) {

    const paperTheme = useTheme();

    const { signOut, toggleTheme } = React.useContext(AuthContext);

    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row',marginTop: 15}}>
                            <Avatar.Image 
                                source={require('../Image/nars.jpg')}
                                size={65}
                            />
                            <View style={{marginLeft:15, flexDirection:'column'}}>
                                <Title style={styles.title}>Nars Bongima</Title>
                                <Caption style={styles.caption}>@014578NB</Caption>
                            </View>
                        </View>
                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                         <DrawerItem
                                icon={({size}) => (
                                    <MaterialIcons name="school"
                                    color={"#1640CA"}
                                    size={size*1.2}
                                    />
                                )}
                                label='Mes Universités'
                                onPress={() => {}}
                            />

                         <DrawerItem
                                icon={({size}) => (
                                    <FontAwesome name='suitcase'
                                    color={"#1640CA"}
                                    size={size*1}
                                    />
                                )}
                                label='  Mon dossier'
                                onPress={() => {}}
                            />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <MaterialIcons 
                                name="notifications" 
                                 color={'#1640CA'}
                                size={size*1.2}
                                />
                            )}
                            label="Mes Abonnements"
                            onPress={() => {}}
                        />
                         <DrawerItem
                                    icon={({size}) => (
                                        <MaterialCommunityIcons name="home-city"
                                        color={"#1640CA"}
                                        size={size*1}
                                        />
                                    )}
                                    label=" Services de Logement"
                                    onPress={() => {}}
                                />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Fontisto
                                name="passport-alt" 
                                 color={'#1640CA'}
                                size={size*1}
                                />
                            )}
                            label=" Services Consulaires"
                            onPress={() => {}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <FontAwesome 
                                name="plane" 
                                 color={'#1640CA'}
                                size={size*1.2}
                                />
                            )}
                            label=" Services de Voyage"
                            onPress={() => {}}
                        />
                    </Drawer.Section>
                    <Drawer.Section title="Preférences">
                        <TouchableRipple onPress={() => {toggleTheme()}}>
                            <View style={styles.preference}>
                                <Text>Dark Theme</Text>
                                <View pointerEvents="none">
                                    <Switch value={paperTheme.dark}/>
                                </View>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem 
                    icon={({color, size}) => (
                        <Icon 
                        name="exit-to-app" 
                         color={'#1640CA'}
                        size={size}
                        />
                    )}
                    label="DECONNEXION"
                    onPress={() => {signOut()}}
                />
            </Drawer.Section>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });