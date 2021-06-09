import cuid from 'cuid';

export default function manageRestaurants(state = {
        restaurants: [], reviews: [],
    }, action) {
        debugger
        switch (action.type) {
        
            case 'ADD_RESTAURANT':
                const restaurant = { test: action.text, id: };
                return {
                    
                    ...state, 
                    restaurants: [...state.restaurant, restaurant]
                }

            default: 
                return state;
        }
}
