import { useContext } from 'react';
import CartContext from './cartContext';

export default function useCartContext() {
    const cartContext = useContext(CartContext);

    if (!cartContext) {
        throw new Error('useCartContext must be used within ThemeProvider');
    }

    return {
        products: cartContext.state.products,
        dispatch: cartContext.dispatch,
    };
}
