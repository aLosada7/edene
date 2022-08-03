import { memo, ReactNode, useReducer } from 'react';
import CartContext from './cartContext';

import {
    reducer as cartReducer,
    initialState as cartInitialState,
} from './cartReducer';

// Study the possibility of exporting the actions list
export const CartProvider = memo(({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(cartReducer, cartInitialState);

    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    );
});
