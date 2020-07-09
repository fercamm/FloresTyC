import { call } from 'redux-saga/effects';
import { autenticacion, firebaseDatabase } from '../../Servicios/Firebase';

const registroFirebase = values => autenticacion
    .createUserWithEmailAndPassword(values.email, values.password)
    .then(success => success)

const registroFirebaseDatabase = ({ uid, nombre, email }) =>
    firebaseDatabase.ref(`usuarios/${uid}`).set({
        nombre,
        email
    });

const loginFirebase = values => autenticacion
    .signInWithEmailAndPassword(values.email, values.password)
    .then(success => success)

function* registrarUsuario(values){
    try{
        const registro = yield call(registroFirebase, values.datos);
        const uid = registro.user.uid;
        const email = registro.user.email;
        const { datos: { nombre } } = values;
        yield call(registroFirebaseDatabase, {uid, nombre, email})
    }catch(error){
        console.log(error);
    }
}

function* loginUsuario(values){
    try{
        const login = yield call(loginFirebase, values.datos);
        const uid = login.user.uid;
        const nombre = login.user.nombre;
        const email = login.user.email;
        // const { datos: { email } } = values;
        console.log(uid);
        console.log(login);
        console.log(email);
        console.log(nombre);
    }catch(error){
        console.log(error);
    }
}

export default registrarUsuario
export default loginUsuario