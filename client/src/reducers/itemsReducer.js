import { GET_ITEMS, ADD_ITEM, REMOVE_ITEM, LOADING_ITEMS } from "./actionTypes"

const initialState= {
    items: [],
    isLoading: false
}

const itemsReducer = (state =initialState, action) => {
    switch(action.type){
        case GET_ITEMS:
            return {
                ...state,
                items: action.payload,
                isLoading: false
            }
        case ADD_ITEM:   
           return {
               ...state,
               items: [...state.items, action.payload]
           } 
       case REMOVE_ITEM:
           return {
               ...state,
               items: state.items.filter(item => item._id !== action.payload)
           }   
       case LOADING_ITEMS:    
           return {
               ...state,
               isLoading: true
           }

       default:
           return state;     
    }
}

export default itemsReducer