import { createContext } from 'react';

import { IFoodInfo } from '../restaurants';
import { initialState } from './cartReducer';

export interface ICart {
    products: { quantity: number; product: IFoodInfo }[];
}

export interface ICartContext {
    state: ICart;
    dispatch: React.Dispatch<any>;
}

const CartContext = createContext<ICartContext>({
    state: initialState,
    dispatch: () => null,
});

export default CartContext;
