import { Icon } from '@edene/components';
import { css } from '@emotion/react';
import { FC, useEffect, useState } from 'react';

const pagination = css`
    display: flex;
    gap: 4px;

    > button {
        display: grid;
        place-items: center;
        width: 34px;
        height: 34px;
        padding: 0;
        border: 0;
        border-radius: 3px;
        background: #262528;
        color: #f9f9f9;
        font-size: 18px;
        cursor: pointer;
    }

    > button.active {
        background: #8f44fd;
    }

    > button:disabled {
        opacity: 0.25;
    }
`;

interface PaginationProps {
    pagesToDisplay?: number;
    pageCount?: number;
}

export const Pagination: FC<PaginationProps> = ({
    pagesToDisplay = 5,
    pageCount = 10,
}) => {
    const [pages, setPages] = useState<number[]>([]);
    const [activePage, setActivePage] = useState<number>();

    const buildPagination = (pageIndex: number) => {
        setActivePage(pageIndex);

        const newPages = [];

        let start = 0;
        let end = pagesToDisplay;

        if (pageIndex > (pagesToDisplay - 1) / 2) {
            start = pageIndex - (pagesToDisplay - 1) / 2;
            end = start + pagesToDisplay;
        }

        if (pageIndex > pageCount - (pagesToDisplay + 1) / 2) {
            start = pageCount - pagesToDisplay;
            end = pageCount;
        }

        for (let i = start; i < end; i++) {
            newPages.push(i);
        }

        setPages(newPages);
    };

    useEffect(() => {
        buildPagination(0);
    }, []);

    return (
        <div css={pagination}>
            <button
                disabled={activePage === 0}
                onClick={() => buildPagination(0)}
                type="button"
            >
                <Icon color="gray">first_page</Icon>
            </button>
            {pages.map((page: number) => (
                <button
                    className={page === activePage ? 'active' : ''}
                    onClick={() => buildPagination(page)}
                    key={page}
                    type="button"
                >
                    {page + 1}
                </button>
            ))}
            <button
                disabled={activePage === pageCount - 1}
                onClick={() => buildPagination(pageCount - 1)}
                type="button"
            >
                <Icon color="gray">last_page</Icon>
            </button>
        </div>
    );
};
