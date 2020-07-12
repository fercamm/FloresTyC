import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import CrearClubForm from './CrearClubForm';

class CrearClub extends Component {
    crearClub = (values) => {
        values.usuario = this.props.usuario.uid;
        this.props.crearClub(values);
    }

    render() {
        return (
            <View>
                <CrearClubForm crearClub={this.crearClub}/>
            </View>
        )
    }
}

const mapStateToProps = state => ({
    usuario: state.sessionReducer
})

const mapDispatchToProps = dispatch => ({
    crearClub: (values) => {
        dispatch({ type: 'CREAR_CLUB', datos: values })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(CrearClub);