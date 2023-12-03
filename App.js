import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, SafeAreaView, Button, View, Text, TextInput } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feed from './components/Feed';
import Profile from './components/Profile';
import Browse from './components/Browse';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Tab = createBottomTabNavigator();

axios.defaults.baseURL = 'http://75.102.64.40:3000'

/**
 * Color pallette for steam
 * #171a21  dark gray
 * #66c0f4  light sky blue
 * #1b2838  dark mat gray with slight blue
 * #2a475e  lighter mat blue and gray
 * #c7d5e0  light gray
 */
export default function App() {

  const [username, onChangeUsername] = useState()
  const [login, setLogin] = useState(false)
  
  useEffect(() => {

  }, [username, login])

  return ( login ?
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Feed') {
              iconName = focused ? 'ios-home' : 'ios-home';
            } else if (route.name === 'Browse') {
              iconName = focused ? 'earth-outline' : 'earth-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'ios-person' : 'ios-person';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarStyle: { backgroundColor: '#1b2838' },
          tabBarActiveTintColor: '#66c0f4',
          tabBarInactiveTintColor: '#c7d5e0',
        })}
        >
        <Tab.Screen name="Feed" children={()=><Feed username={username}/>} options={{headerStyle:{backgroundColor: '#2a475e',},headerTintColor: '#fff', unmountOnBlur: true}}/>
        <Tab.Screen name="Browse" children={()=><Browse username={username}/>} options={{headerStyle:{backgroundColor: '#2a475e',},headerTintColor: '#fff', unmountOnBlur: true}}/>
        <Tab.Screen name="Profile" children={()=><Profile username={username}/>} options={{headerStyle:{backgroundColor: '#2a475e',},headerTintColor: '#fff', unmountOnBlur: true}}/>
      </Tab.Navigator>
    </NavigationContainer> :
    <SafeAreaView style={styles.screen}>
        <View style={styles.container}>
          <TextInput style={styles.textBox} onChangeText={onChangeUsername} multiline={true} placeholder='enter username'></TextInput>
          <Button onPress={() => setLogin(true)} title="log in"/>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#1b2838',
    flex: 1
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignSelf: "stretch",
    marginHorizontal: 60
  },
  textBox: {
      textAlignVertical: 'center',
      backgroundColor: "white",
      marginBottom: 20,
      padding: 5
  }
});

