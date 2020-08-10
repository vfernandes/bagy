const INITIAL_STATE = {
    //TODO Dados da empresa
}

export default function store(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'RESET_STORE_INFO':
            return INITIAL_STATE;
        case 'SET_EXCHANGE_VALUES':
            return {...state, ...action.store}
        default:
            return state;
    }
}