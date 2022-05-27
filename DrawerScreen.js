import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './HomeScreen';
import DirectoryScreen from './DirectoryScreen';

const Drawer = createDrawerNavigator();

function DrawerScreen() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={HomeScreen}/>
            <Drawer.Screen name="Directory" component={DirectoryScreen} options={{title: "Directorio de Juegos"}} />
        </Drawer.Navigator>
    );
}

export default DrawerScreen;