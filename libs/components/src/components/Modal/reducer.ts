import { ModalsState, ModalState } from './types';

interface OpenAction {
    type: 'OPEN';
    payload: ModalState;
}

interface CloseAction {
    type: 'CLOSE';
    payload: string;
}

export function modalsReducer(
    state: ModalsState,
    action: OpenAction | CloseAction
): ModalsState {
    switch (action.type) {
        case 'OPEN': {
            return {
                current: action.payload,
                modals: [...state.modals, action.payload],
            };
        }
        case 'CLOSE': {
            return {
                current: state.modals[state.modals.length - 2] || null,
                modals: state.modals.filter((m) => m.id !== action.payload),
            };
        }
        default: {
            return state;
        }
    }
}
