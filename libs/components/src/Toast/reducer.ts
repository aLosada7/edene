import { ToastsState, ToastState } from './types';

interface ShowAction {
    type: 'SHOW';
    payload: ToastState;
}

interface HideAction {
    type: 'HIDE';
    payload: string;
}

export function toastsReducer(
    state: ToastsState,
    action: ShowAction | HideAction
): ToastsState {
    switch (action.type) {
        case 'SHOW': {
            return {
                toasts: [...state.toasts, action.payload],
            };
        }
        case 'HIDE': {
            return {
                toasts: state.toasts.filter((m) => m.id !== action.payload),
            };
        }
        default: {
            return state;
        }
    }
}
