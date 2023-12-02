import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feed from './components/Feed';
import Profile from './components/Profile';
import Browse from './components/Browse';
import axios from 'axios';

const Tab = createBottomTabNavigator();

axios.defaults.baseURL = 'http://192.168.1.19:3000'

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
        <Tab.Screen name="Feed" component={Feed} options={{headerStyle:{backgroundColor: '#2a475e',},headerTintColor: '#fff'}}/>
        <Tab.Screen name="Browse" component={Browse} options={{headerStyle:{backgroundColor: '#2a475e',},headerTintColor: '#fff'}}/>
        <Tab.Screen name="Profile" component={Profile} options={{headerStyle:{backgroundColor: '#2a475e',},headerTintColor: '#fff'}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

