import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

class MiClub extends Component {
    componentWillMount(){
        let values = {}
        values.usuario = this.props.usuario.uid
        if(!this.props.club?.length){//Si no tiene "miClub", lo busca
            this.props.buscarClub(values);
        }
    }

    render() {
        console.log(this.props.club)
        return (
            <View>
                { this.props.club ? <Text> { this.props.club.nombre } </Text> : null }
                { this.props.club ? <Text> { this.props.club.personal ? 'Personal' : 'Comunitario' } </Text> : null }
            </View>
        )
    }
}

const mapStateToProps = state => ({
    usuario: state.sessionReducer,
    club: state.reducerClub.club
})

const mapDispatchToProps = dispatch => ({
    buscarClub: (values) => {
        dispatch({ type: 'BUSCAR_CLUB', datos: values })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(MiClub);