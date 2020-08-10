import { ADD_ITEM, REMOVE_ITEM, GET_ITEMS, LOADING_ITEMS } from "./actionTypes"
import axios from 'axios'

export const  getItems =() => dispatch =>{
    dispatch(setLoadingItems())
    axios.get('/api/items').then(
        (res) => dispatch({
            type: GET_ITEMS,
            payload: res.data
        })
    )
}
export const  addItem = (item) => dispatch => {
    axios.post('/api/items', item).then(
        (res) => dispatch({
            type: ADD_ITEM,
            payload: res.data
        })
    )
          
}

export const  removeItem = (id) =>dispatch => {
    axios.delete(`/api/items/${id}`)
          .then(() => dispatch({
              type: REMOVE_ITEM,
              payload: id
          }))
}


export const setLoadingItems =() => {
    return {
        type: LOADING_ITEMS
    }
}
