import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { Field, reduxForm } from 'redux-form';

const dynamicField = props => (
    <View style={styles.textInput}>
        <TextInput placeholder={props.placeholder}
            onChangeText={props.input.onChange}
            value={props.input.value}
            keyboardType={props.keyboardType}
            autoCapitalize={props.autoCapitalize}
            secureTextEntry={props.secureTextEntry}
        />
        <View style={styles.linea}/>
        { props.meta.touched && props.meta.error && <Text style={styles.errors}>{ props.meta.error }</Text> }
    </View>
);

const CrearClubForm = (props) => (
    <View>
        <Field name="nombre" component={dynamicField} placeholder='Nombre' 
            keyboardType='default' autoCapitalize='sentences' secureTextEntry={false}/>
        <Text>Club de único jugador:</Text>
        <Field name="personal" component="input" type="checkbox"/>
        <Button title="Registrar"
            onPress={props.handleSubmit(props.crearClub)}
        />
    </View>
);

const validate = (values) => {
    const errors = {};

    if(!values.nombre){
        errors.nombre = 'requerido';
    }else if(values.nombre.length < 5){
        errors.nombre = 'es muy corto';
    }else if(values.nombre.length > 50){
        errors.nombre = 'no debe superar los 50 caracteres';
    }

    if(!values.personal){
        values.personal = false;
    }
    
    return errors;
}

const styles = StyleSheet.create({
    textInput: {
        marginBottom: 16
    },
    linea: {
        backgroundColor: '#DCDCDC',
        height: 2
    },
    errors: {
        color: '#ff0000'
    }
})

export default reduxForm({ form: 'ClubForm', validate })(CrearClubForm);