import { act, renderHook, waitFor } from '@testing-library/react';
import { ReactNode } from 'react';

import { useTable } from './TableProvider';
import { Table } from './Table';

const ALBUM_1_ID = '12141424';
const ALBUM_1 = {
    id: ALBUM_1_ID,
    title: '1989',
};

const ALBUM_2 = {
    id: '12141425',
    title: 'A night at the Opera',
};

describe('TableProvider', () => {
    describe('Table selection', () => {
        const wrapper = ({
            children,
            ...rest
        }: {
            selectedRows?: unknown;
            children: ReactNode;
        }) => (
            <Table selection rows={[ALBUM_1, ALBUM_2]} {...rest}>
                {children}
            </Table>
        );

        it('should return initial provider state for selection', () => {
            const { result } = renderHook(() => useTable(), {
                wrapper,
            });

            waitFor(() => {
                expect(result.current.selection).toBe(true);
                expect(result.current.allChecked).toBe(false);
            });
        });

        it('should return all rows as checked when onToggleAll triggered', () => {
            const { result } = renderHook(() => useTable(), {
                wrapper,
            });

            waitFor(() => {
                expect(result.current.selection).toBe(true);
                expect(result.current.allChecked).toBe(false);
            });

            act(() => {
                result.current.onToggleAll();
            });

            expect(result.current.selection).toBe(true);
            expect(result.current.allChecked).toBe(true);
        });

        it('should add one row when onToggle triggered with checked to true', async () => {
            const { result } = renderHook(() => useTable(), {
                wrapper,
            });

            waitFor(() => {
                expect(result.current.selection).toBe(true);
                expect(result.current.allChecked).toBe(false);
            });

            act(() => {
                result.current.onToggle({
                    target: {
                        id: ALBUM_1_ID,
                        checked: true,
                    },
                });
            });

            expect(result.current.selection).toBe(true);
            expect(result.current.allChecked).toBe(false);
            expect(result.current.selectedRows).toEqual([ALBUM_1]);
        });

        it('should remove one row when onToggle triggered with checked to false', async () => {
            const { result } = renderHook(() => useTable(), {
                wrapper,
                initialProps: {
                    selectedRows: [ALBUM_1],
                },
            });

            waitFor(() => {
                expect(result.current.selection).toBe(true);
                expect(result.current.allChecked).toBe(false);
                expect(result.current.selectedRows).toEqual(
                    expect.arrayContaining([expect.objectContaining(ALBUM_1)])
                );
            });

            act(() => {
                result.current.onToggle({
                    target: {
                        id: ALBUM_1_ID,
                        checked: false,
                    },
                });
            });

            expect(result.current.selection).toBe(true);
            expect(result.current.allChecked).toBe(false);
            expect(result.current.selectedRows).toEqual([]);
        });

        it('should return allChecked', async () => {
            const wrapper = ({ children }: { children: ReactNode }) => (
                <Table
                    selection
                    rows={[ALBUM_1, ALBUM_2]}
                    selectedRows={[ALBUM_2]}
                >
                    {children}
                </Table>
            );

            const { result } = renderHook(() => useTable(), {
                wrapper,
            });

            waitFor(() => {
                expect(result.current.selection).toBe(true);
                expect(result.current.allChecked).toBe(false);
                expect(result.current.selectedRows).toEqual([ALBUM_2]);
            });

            act(() => {
                result.current.onToggle({
                    target: {
                        id: ALBUM_1_ID,
                        checked: true,
                    },
                });
            });

            expect(result.current.selection).toBe(true);
            expect(result.current.allChecked).toBe(true);
            expect(result.current.selectedRows).toEqual(
                expect.arrayContaining([
                    expect.objectContaining(ALBUM_1),
                    expect.objectContaining(ALBUM_2),
                ])
            );
        });
    });
});
