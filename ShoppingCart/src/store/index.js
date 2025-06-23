import {configureStore} from '@reduxjs/toolkit';
import cartReducer from './slices/cart-slice'
// import dummyReducer from './slices/dummy-slice'

const store =configureStore({
  reducer : {
    cart:cartReducer,
    // dumy:dummyReducer

  }
})

export default store;