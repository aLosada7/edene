import React from 'react';
import { render, act, RenderResult } from '@testing-library/react';

export const renderWithAct = async (element: React.ReactElement) => {
    let result: RenderResult;
    await act(async () => {
        result = render(element);
    });
    return result;
};
export const actAsync = async (callback: () => void) => {
    await act(async () => callback());
};
