import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Awal from './src/navigation/screens/Awal'
import Splash from './src/navigation/screens/Splash'
import Login from './src/navigation/screens/Login'
import Daftar from './src/navigation/screens/Daftar'
import Home from './src/navigation/Home'
import Profiledoc from './src/navigation/screens/Profiledoc'
import Profile1 from './src/navigation/screens/PagePD1'


const Stack = createStackNavigator();
const App = () => {
  return ( 
  <NavigationContainer>
     <Stack.Navigator initialRouteName="Splash">
            <Stack.Screen name="Splash" component={Splash}  options={{headerShown: false}} />
            <Stack.Screen name="Awal" component={Awal}  options={{headerShown: false}} />
            <Stack.Screen name="Login" component={Login}  options={{headerShown: false}} />
            <Stack.Screen name="daftar" component={Daftar}  options={{headerShown: false}} />
            <Stack.Screen name="home" component={Home}  options={{headerShown: false}} />
            <Stack.Screen name="profiledoc" component={Profiledoc}  options={{headerShown: false}} />
            <Stack.Screen name="profile1" component={Profile1}  options={{headerShown: false}} />
        </Stack.Navigator>
    </NavigationContainer>
  )
};

export default App;