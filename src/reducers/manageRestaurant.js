import cuid from 'cuid';
export const cuidFn = cuid;
export default function manageRestaurants(state = {
        restaurants: [], reviews: [],
    }, action) {
        // debugger
        switch (action.type) {
        
            case 'ADD_RESTAURANT':
                console.log('add restaurant', action.type)
                const restaurant = { text: action.text, id: cuidFn() };
                return {
                    
                    ...state, 
                    restaurants: [...state.restaurant, restaurant]
                }

            default: 
                return state;
        }
}
