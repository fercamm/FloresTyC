import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { autenticacion } from '../../Store/Servicios/Firebase'
import Menu from './Menu'
import CrearClub from './../Clubes/CrearClub'
import MiClub from './../Clubes/MiClub'
import Clubes from './../Clubes/Clubes'

const Stack = createStackNavigator()

const MenuScreenTab = ({ navigation }) => (
    <Stack.Navigator>
        <Stack.Screen name="MenuScreen" component={ Menu } options={ScreenTabOptions('Menu')} />
        <Stack.Screen name="CrearClubScreen" component={ CrearClub } options={ScreenTabOptions('CrearClub')} />
        <Stack.Screen name="MiClubScreen" component={ MiClub } options={ScreenTabOptions('MiClub')} />
        <Stack.Screen name="ClubesScreen" component={ Clubes } options={ScreenTabOptions('Clubes')} />
    </Stack.Navigator>
)

const ScreenTabOptions = (title) => (
    {
        title: title,
        headerStyle: {
            backgroundColor: '#aaCCaa',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        }
    }
)

const CloseSession = () => {
    autenticacion.signOut()
    return null
}

const Tab = createBottomTabNavigator();

const TabStackMenu = () => (
  <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="MenuScreenTab" component={MenuScreenTab} />
      <Tab.Screen name="CloseSession" component={CloseSession} />
    </Tab.Navigator>
  </NavigationContainer>
)

export default TabStackMenu