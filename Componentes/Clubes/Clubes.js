import React, { Component } from 'react';
import { View, FlatList, Text, Button } from 'react-native';
import { connect } from 'react-redux';

class Clubes extends Component {
    componentWillMount(){
        console.log('componentWillMount')
        this.props.buscarClubes();
        let values = {}
        values.usuario = this.props.usuario.uid
        if(!this.props.club?.length){//Si no tiene "miClub", lo busca
            this.props.buscarClub(values);
        }
    }

    render() {
        console.log(this.props.club)
        console.log(this.props.clubes)
        const { navigation } = this.props;
        return (
            <View>
                <FlatList data={this.props.clubes}
                    renderItem={ ( { item } ) => 
                        <View>
                            <Text>{ item.nombre }</Text>
                            { item.usuario == this.props.usuario.uid ? 
                                <Button title="Mi Club" onPress={ () => { navigation.navigate('MiClubScreen') } } />
                                : ( this.props.club ? '' : <Button title="Unirse" onPress={ () => { console.log('unirse!') } }  /> )
                            }
                        </View>
                    }/>
            </View>
        )
    }
}

const mapStateToProps = state => ({
    usuario: state.sessionReducer,
    clubes: state.reducerClub.clubes,
    club: state.reducerClub.club
})

const mapDispatchToProps = dispatch => ({
    buscarClubes: () => {
        dispatch({ type: 'BUSCAR_CLUBES' })
    },
    buscarClub: (values) => {
        dispatch({ type: 'BUSCAR_CLUB', datos: values })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Clubes);