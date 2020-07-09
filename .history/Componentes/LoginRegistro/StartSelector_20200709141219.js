import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { autenticacion } from '../../Store/Servicios/Firebase';
import TabStackLoginRegistro from './TabStackLoginRegistro';
import ExampleWelcome from '../ExampleWelcome/ExampleWelcome';

class StartSelector extends Component {
    componentDidMount(){
        this.props.autenticacion();
    }

    render() {
        return (
            <View>
                { console.log(this.props.usuario) }
                { this.props.usuario != null ? <TabStackLoginRegistro/> : <ExampleWelcome/> }
            </View>
        )
    }
}

const mapStateToProps = state => ({
    usuario: state.sessionReducer
})

const mapDispatchToProps = dispatch => ({
    autenticacion: () => {
        autenticacion.onAuthStateChanged((usuario) => {
            if(usuario){
                console.log(usuario);
                dispatch({ type: 'INIT_SESSION', usuario });
            }else{
                console.log('No hay sesión');
                dispatch({ type: 'CLOSE_SESSION' });
            }
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(StartSelector);