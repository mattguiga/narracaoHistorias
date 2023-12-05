import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import BottomTabNavigator from './TabNavigator'
import Home from'../screens/Home'

const Drawer = createDrawerNavigator()

const DrawerNavigator = ()=>{
    return(
        <Drawer.Navigator>
            <Drawer.Screen name = "Início"  component = {Home}></Drawer.Screen>
            <Drawer.Screen name = "Abas"  component = {TabNavigator}></Drawer.Screen>
        </Drawer.Navigator>
    )
    
}
export default DrawerNavigator