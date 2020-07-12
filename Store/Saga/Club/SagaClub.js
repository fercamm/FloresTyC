import { call, put } from 'redux-saga/effects';
import { firebaseDatabase } from '../../Servicios/Firebase';

const crearClubFirebaseDatabase = ({ nextClubId, nombre, personal, usuario, creacion, modificacion }) =>
    firebaseDatabase.ref(`clubes/${nextClubId}`).set({
        nombre,
        personal,
        usuario,
        creacion,
        modificacion
    });

const obtenerUltimoIdClub = () => 
    firebaseDatabase.ref(`clubes`).limitToLast(1).once('value').then(snapshot => snapshot.val())

const buscarClub = ({usuario}) =>
    firebaseDatabase.ref(`clubes`).orderByChild("usuario").equalTo(usuario).once('child_added').then(snapshot => snapshot.val())

const buscarClubes = () =>
    firebaseDatabase.ref(`clubes`).once('value').then(snapshot => snapshot.val())

export function* sagaCrearClub(values){
    try{
        const clubObj = yield call(obtenerUltimoIdClub)
        const maxClubId = Object.keys(clubObj)[0]
        const nextClubId = parseInt(maxClubId || 1)+1
        const ultimoClub = clubObj[Object.keys(clubObj)[0]]
        const { datos: { nombre, personal, usuario } } = values
        const hoy = new Date();
        const creacion  = hoy.getTime()
        const modificacion = hoy.getTime()
        yield call(crearClubFirebaseDatabase, {nextClubId, nombre, personal, usuario, creacion, modificacion})
    }catch(error){
        console.log(error);
    }
}

export function* sagaBuscarClub(values){
    try{
        console.log('sagaBuscarClub')
        const { datos: { usuario } } = values;
        const club = yield call(buscarClub, {usuario})
        console.log('buscarClub');
        console.log(club);
        yield put({ type: 'BUSCAR_CLUB_STORE', club })
    }catch(error){
        console.log(error);
    }
}

export function* sagaBuscarClubes(){
    try{
        console.log('sagaBuscarClubes')
        const clubesObj = yield call(buscarClubes)
        const clubes = []
        Object.keys(clubesObj).forEach(function(key) {
          const miClub = clubesObj[key]
          miClub.key = key
          clubes.push(miClub)
        });
        yield put({ type: 'BUSCAR_CLUBES_STORE', clubes })
    }catch(error){
        console.log(error);
    }
}