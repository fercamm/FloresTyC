import { takeEvery } from 'redux-saga/effects';
import { loginUsuario, registrarUsuario } from './LoginRegistro/SagaLoginRegistro';

export default function* initSagaFunctions(){
    yield takeEvery ('REGISTRO', registrarUsuario)
    yield takeEvery ('LOGIN', loginUsuario)
}