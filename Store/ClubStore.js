export const reducerClub = (state = [], action) => {
    switch(action.type){
        case 'BUSCAR_CLUB_STORE':
            console.log('BUSCAR_CLUB_STORE');
            console.log(action)
            return action;
        case 'BUSCAR_CLUBES_STORE':
            console.log('BUSCAR_CLUBES_STORE');
            return action;
        default:
            return state;
    }
}