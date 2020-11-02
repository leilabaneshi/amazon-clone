
export const initialState = {
    basket: [],
};

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case 'ADD-TO-BASKET':
            //logic for adding item to basket
            return {
                ...state,
                basket: [...state.basket, action.item],

            };
        case 'REMOVE-FROM-BASKET':
            //logic for removing from basket
            return { state };
        default:
            return state;
    }
}

export default reducer;