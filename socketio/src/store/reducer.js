export default function reducer(state = {}, action) {
    switch (action.type) {
        case 'ADD_MESSAGE':
            return {
                ...state,
                message : [...(state.message),action.data]
            };
        case 'RESET_MESSAGE':
            return{
                ...state,
                message : []
            }
        case 'CNT_UP' :
            
            return {
                ...state,
                cnt : state.cnt+1
            }
        default:
            return state;
    }
}