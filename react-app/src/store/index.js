import { configureStore } from '@reduxjs/toolkit';

import itemReducer from './ducks//item';
import layoutReducer from './ducks/layout';
import cartReducer from './ducks/cart';


export default configureStore({
        reducer: {
                item: itemReducer,
                layout: layoutReducer,
                cart: cartReducer,
        }
})