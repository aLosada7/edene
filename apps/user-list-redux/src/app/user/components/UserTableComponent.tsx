import {
    ReactElement,
    cloneElement,
    DetailedHTMLProps,
    HTMLAttributes,
} from 'react';

import VirtualTable from '../../shared/components/VirtualTable';
import { IUser } from '../model/user';

export interface IUserTableComponentProps {
    list: IUser[];
    total: number;
    hasNextPage: boolean;
    isNextPageLoading: boolean;
    fetch: () => void;
    RowComponent?: ReactElement;
}

export interface IUserTableRowProps {
    index: number;
    style: DetailedHTMLProps<
        HTMLAttributes<HTMLTableRowElement>,
        HTMLTableRowElement
    >;
}

export const UserTableComponent = ({
    list,
    hasNextPage,
    isNextPageLoading,
    fetch,
    RowComponent,
}: IUserTableComponentProps) => {
    const UserTableHeader = (
        <thead>
            <tr>
                <th className="w-60">#</th>
                <th>Nombre</th>
                {RowComponent ? <th className="text-center w-100"></th> : null}
            </tr>
        </thead>
    );

    const UserTableRow = ({ index, style }: IUserTableRowProps) => {
        const item = list[index];

        return (
            <tr style={style}>
                <td className="w-60">{item._id}</td>
                <td>{item.name}</td>
                {RowComponent && (
                    <td className="text-center w-100">
                        {cloneElement(RowComponent, { User: item })}
                    </td>
                )}
            </tr>
        );
    };

    return (
        <VirtualTable
            hasNextPage={hasNextPage}
            isNextPageLoading={isNextPageLoading}
            items={list}
            loadNextPage={fetch}
            Header={UserTableHeader}
            Row={UserTableRow}
        />
    );
};
