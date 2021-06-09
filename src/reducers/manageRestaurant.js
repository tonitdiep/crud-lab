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
                    console.log('restaurant id', action)
                    return r.id !== action.id
                
                 } )
                // console.log('DELETE state', state)
                // console.log('DELETE restaurant', restaurants)
                return {
                    ...state, restaurants
                    // restaurants
                    
                }
                case 'ADD_REVIEW':
                
                    const review = { text: action.review.text, restaurantId: action.review.restaurantId, id: cuidFn()};
                    console.log('add state', state)
                    // console.log('add action', action)
                    return {...state, reviews: [...state.reviews, review]}
                    // console.log({...state, reviews: [...state.reviews, review]})
                
                case 'DELETE_REVIEW':
                    const reviews = state.reviews.filter(review => {
                        // console.log('DELETE rev action', action)
                        // console.log('DELETE REV object', review)
                        return review.id !== action.id
                    
                    });

                    return {...state, reviews}

            default: 
                return state;
        }
}
