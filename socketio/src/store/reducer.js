export default function reducer(state, action) {
    switch (action.type) {
        case 'ADD_MESSAGE':
            return {
                ...state,
                message : [...state.message ,action.data]
            };
        case 'RESET_MESSAGE':
            return{
                ...state,
                message : []
            }
        default:
            return state;
    }
}