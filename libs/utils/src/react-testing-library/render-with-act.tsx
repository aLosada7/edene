import React from 'react';
import { render, act, RenderResult } from '@testing-library/react';

export const renderWithAct = async (element: React.ReactElement) => {
    let result: unknown;
    await act(async () => {
        result = render(element);
    });
    return result as RenderResult;
};
export const actAsync = async (callback: () => void) => {
    await act(async () => callback());
};
