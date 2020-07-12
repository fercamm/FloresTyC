import React from 'react';
import { View, Button } from 'react-native';

const Menu = (props) => {
    console.log(props)
    const { navigation } = props;
    return (
        <View>
            <Button title="Crear Club" onPress={ () => { navigation.navigate('CrearClubScreen') } } />
            <Button title="Mi Club" onPress={ () => { navigation.navigate('MiClubScreen') } } />
            <Button title="Listado de Clubes" onPress={ () => { navigation.navigate('ClubesScreen') } } />
        </View>
    )
}

export default Menu;