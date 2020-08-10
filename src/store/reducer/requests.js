const INITIAL_STATE = {
    //TODO Dados dos pedidos
}

export default function store(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'RESET_REQUESTS_INFO':
            return INITIAL_STATE;
        case 'SET_REQUESTS_INFO':
            return {...state, ...action.store}
        default:
            return state;
    }
}