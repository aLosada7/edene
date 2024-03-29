import { memo, ReactNode, useReducer } from 'react';

import CartContext from './cartContext';
import {
    initialState as cartInitialState,
    reducer as cartReducer,
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
