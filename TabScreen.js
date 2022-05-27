import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import DirectoryScreen from './DirectoryScreen';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

function TabScreen() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => (
          <Ionicons name="home" size={20} />
          ),
        }}/>
            <Tab.Screen name="Directory" component={DirectoryScreen} options={{
          tabBarLabel: 'Directorio de Juegos',
          tabBarIcon: () => (
          <Ionicons name="game-controller-outline" size={20} />
          ),
        }}/>
        </Tab.Navigator>
    );
}

export default TabScreen;