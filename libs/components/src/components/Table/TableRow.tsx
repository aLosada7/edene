import { ReactNode } from 'react';
import { Props } from '@edene/foundations';

import { Checkbox } from '../../forms/Checkbox';
import { tr } from './styles';
import { TableCell } from './TableCell';
import { TableHeader } from './TableHeader';
import { useTable } from './TableProvider';

export interface TableRowProps extends Props {
    /** unique identifier for the rows*/
    id?: string;

    headerRow?: boolean;

    children: ReactNode | ReactNode[];
}

export const TableRow = ({
    id,
    headerRow = false,
    children,
    css,
    ...props
}: TableRowProps) => {
    const { selection, allChecked, onToggle, onToggleAll, isChecked } =
        useTable();

    const SelectionCheckbox = ({
        id,
        checked,
        onChange,
    }: {
        id?: string;
        checked: boolean;
        onChange: (e: Event) => void;
    }) => <Checkbox id={id} checked={checked} onChange={onChange} />;

    const Selection = headerRow ? (
        <TableHeader align="center">
            <SelectionCheckbox checked={allChecked} onChange={onToggleAll} />
        </TableHeader>
    ) : (
        <TableCell align="center">
            <SelectionCheckbox
                id={id}
                checked={isChecked(id)}
                onChange={onToggle}
            />
        </TableCell>
    );

    return (
        <tr css={[tr, css]} {...props}>
            {selection && Selection}
            {children}
        </tr>
    );
};
