import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feed from '../screens/Feed'
import Home from '../screens/Home'

const Tab = createBottomTabNavigator()

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                var iconName;
                if (route.name === "Feed") {
                    iconName = focused ? 'book' : 'book-outline'

                }
                else if (route.name === "Inicio") {
                    iconName = focused ? 'home' : 'home-outline'
                }
                return <Ionicons name={iconName} size={size} color={color}
                 />

            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray'
        })}>
            <Tab.Screen name= "Feed" component={Feed}></Tab.Screen>
            <Tab.Screen name= "Inicio" component={Home}></Tab.Screen>
        </Tab.Navigator>
    )

}
export default BottomTabNavigator