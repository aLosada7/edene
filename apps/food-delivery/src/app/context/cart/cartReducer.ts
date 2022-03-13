import { IFoodInfo } from '../restaurants';
import { ActionMap } from '../types';
import { ICart } from './cartContext';

export const initialState: ICart = {
    products: [],
};

export enum CartTypes {
    Add = 'ADD_PRODUCT',
    Remove = 'REMOVE_PRODUCT',
    Clear = 'CLEAR_CART',
}

type ProductPayload = {
    [CartTypes.Add]: { quantity: number; product: IFoodInfo };
    [CartTypes.Remove]: { product: IFoodInfo };
    [CartTypes.Clear]: void;
};

export type CartActions =
    ActionMap<ProductPayload>[keyof ActionMap<ProductPayload>];

export function reducer(state = initialState, action: CartActions) {
    switch (action.type) {
        case CartTypes.Add:
            return {
                ...state,
                products: [...state.products, action.payload],
            };
        case CartTypes.Remove:
            return {
                ...state,
                products: state.products.filter(
                    (cardProduct) =>
                        cardProduct.product.id !== action.payload.product.id
                ),
            };
        case CartTypes.Clear:
            return { ...state, products: [] };
        default:
            return state;
    }
}
