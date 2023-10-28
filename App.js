import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feed from './components/Feed';
import Profile from './components/Profile';

const Tab = createBottomTabNavigator();

/**
 * Color pallette for steam
 * #171a21  dark gray
 * #66c0f4  light sky blue
 * #1b2838  dark mat gray with slight blue
 * #2a475e  lighter mat blue and gray
 * #c7d5e0  light gray
 */
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Feed') {
              iconName = focused
                ? 'ios-home'
                : 'ios-home';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'ios-person' : 'ios-person';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen name="Feed" component={Feed}options={{headerStyle:{backgroundColor: '#2a475e',},headerTintColor: '#fff'}}/>
        <Tab.Screen name="Profile" component={Profile}options={{headerStyle:{backgroundColor: '#2a475e',},headerTintColor: '#fff'}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2a475e',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff'
  },
});

