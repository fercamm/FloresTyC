import React, { Component } from 'react';
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
            this.props.usuario ? <ExampleWelcome/> : <TabStackLoginRegistro/>
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