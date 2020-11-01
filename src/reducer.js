
export const initialState = {
    basket: [],
}

function reducer(state, action) {
    switch (action.type) {
        case 'ADD-TO-BASKET':
            //logic for adding item to basket
            break;
        case 'REMOVE-FROM-BASKET':
            //logic for removing from basket
            break;
        default:
            return state;
    }
}

export default reducer;