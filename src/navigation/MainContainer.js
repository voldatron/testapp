import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// Screens
import { StyleSheet } from 'react-native';
import Home from './Home'

// Screen names
const homeName = 'Home';
const download = 'Download';
const chatListName = 'ChatList';

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <Tab.Navigator
      initialRouteName={homeName}
      screenOptions={({ route }) => ({
        // eslint-disable-next-line react/no-unstable-nested-components
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          const rn = route.name;

          if (rn === homeName) {
            iconName = focused ? 'home' : 'home-outline';
          } else if (rn === chatListName) {
            iconName = focused ? 'ios-chatbox-ellipses' : 'ios-chatbox-ellipses-outline';
          } else if (rn === download) {
            iconName = focused ? 'person-circle' : 'person-circle-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#34CC99',
        tabBarInactiveTintColor: 'gray',
        showIcon: true,
        tabBarLabelStyle: { paddingBottom: 10, fontSize: 10 },
        tabBarStyle: [
          styles.tabBar,
          null,
        ],
        headerShown: false,
        tabBarHideOnKeyboard: true,
      })}
      tab
    >

      <Tab.Screen name={homeName} component={Home} />
      <Tab.Screen name={chatListName} component={Home} />
      <Tab.Screen name={download} component={Home} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    padding: 10,
    height: 60,
    backgroundColor: '#112340',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});

export default MainContainer;