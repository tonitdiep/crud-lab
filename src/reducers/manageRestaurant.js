import cuid from 'cuid';
export const cuidFn = cuid;
export default function manageRestaurants(state = {
        restaurants: [], reviews: [],
    }, action) {
        // debugger
        switch (action.type) {
        
            case 'ADD_RESTAURANT':
                console.log('add r state', state)
                console.log('add r action', action.type)
                const restaurant = { text: action.text, id: cuidFn() };
                console.log('add rest', state)
                console.log('adding R', action )
                return {
                    
                    ...state, 
                    restaurants: [...state.restaurants, restaurant]
                }
            
            case 'DELETE_RESTAURANT':
                const restaurants = state.restaurants.filter((r) => { 
                    console.log('restaurant', r)
                    return r.id != action.id
                
                 } )
                // console.log('DELETE state', state)
                // console.log('DELETE restaurant', restaurants)
                return {

                    restaurants
            
                }
            default: 
                return state;
        }
}
