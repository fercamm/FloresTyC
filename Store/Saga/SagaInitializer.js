import { takeEvery } from 'redux-saga/effects';
import { loginUsuario, registrarUsuario } from './LoginRegistro/SagaLoginRegistro';
import { sagaCrearClub, sagaBuscarClub, sagaBuscarClubes } from './Club/SagaClub';

export default function* initSagaFunctions(){
    yield takeEvery ('REGISTRO', registrarUsuario)
    yield takeEvery ('LOGIN', loginUsuario)
    yield takeEvery ('CREAR_CLUB', sagaCrearClub)
    yield takeEvery ('BUSCAR_CLUB', sagaBuscarClub)
    yield takeEvery ('BUSCAR_CLUBES', sagaBuscarClubes)
}