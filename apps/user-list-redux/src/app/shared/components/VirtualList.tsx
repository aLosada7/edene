import { FixedSizeListProps, VariableSizeList } from 'react-window';
import InfiniteLoader from 'react-window-infinite-loader';
import AutoSizer from 'react-virtualized-auto-sizer';
import { CSSProperties, forwardRef, ReactNode, useEffect, useRef } from 'react';

export interface VirtualListProps
    extends Omit<
        FixedSizeListProps,
        | 'children'
        | 'innerElementType'
        | 'height'
        | 'width'
        | 'itemSize'
        | 'itemCount'
    > {
    hasNextPage: boolean;
    isNextPageLoading: boolean;
    items: unknown[];
    getItemsHeight?: (index: number) => number;
    itemSize?: number;
    loadNextPage: () => void;
    Header?: ReactNode;
    Row: any;
}

export interface VirtualListItemProps {
    index: number;
    style: Record<string, unknown>;
}

/**
 * The Inner component of the virtual list. This is the "Magic".
 * Capture what would have been the top elements position and apply it to the list.
 * Render an optional header.
 **/
const Inner = forwardRef<HTMLDivElement, React.HTMLProps<HTMLDivElement>>(
    function Inner({ children, ...rest }, ref) {
        return (
            <div {...rest} ref={ref}>
                <ul>{children}</ul>
            </div>
        );
    }
);

function VirtualListRow({
    Row,
    isItemLoaded,
    index,
    style,
}: {
    isItemLoaded: (index: number) => boolean;
    Row: any;
    index: number;
    style: CSSProperties;
}) {
    if (!isItemLoaded(index)) return <div></div>;
    return <Row index={index} style={style} />;
}

export default function VirtualList({
    // Are there more items to load?
    // (This information comes from the most recent API request.)
    hasNextPage,

    // Are we currently loading a page of items?
    // (This may be an in-flight flag in your Redux store for example.)
    isNextPageLoading,

    // Array of items loaded so far.
    items,

    // Callback function responsible for loading the next page of items.
    loadNextPage,
    getItemsHeight,
    itemSize,
    Row,
}: VirtualListProps) {
    useEffect(() => {
        if (listRef && listRef.current && listRef.current.resetAfterIndex) {
            listRef.current.resetAfterIndex(0);
        }
    }, [items]);

    const listRef: any = useRef({});
    // If there are more items to be loaded then add an extra row to hold a loading indicator.
    const itemCount = hasNextPage ? items.length + 1 : items.length;

    // Only load 1 page of items at a time.
    // Pass an empty callback to InfiniteLoader in case it asks us to load more than once.
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const loadMoreItems = isNextPageLoading ? () => {} : loadNextPage;

    const getItemHeight = (index: number) => {
        if (getItemsHeight) return getItemsHeight(index);

        return itemSize || 40;
    };

    // Every row is loaded except for our loading indicator row.
    const isItemLoaded = (index: number) =>
        !hasNextPage || index < items.length;

    return (
        <AutoSizer>
            {({ height, width }) => (
                <InfiniteLoader
                    isItemLoaded={isItemLoaded}
                    itemCount={itemCount}
                    loadMoreItems={loadMoreItems}
                >
                    {({ onItemsRendered }) => (
                        <VariableSizeList
                            height={height}
                            itemCount={itemCount}
                            itemSize={getItemHeight}
                            onItemsRendered={onItemsRendered}
                            ref={listRef}
                            width={width}
                            innerElementType={Inner}
                        >
                            {({ index, style }) => (
                                <VirtualListRow
                                    isItemLoaded={isItemLoaded}
                                    Row={Row}
                                    index={index}
                                    style={style}
                                />
                            )}
                        </VariableSizeList>
                    )}
                </InfiniteLoader>
            )}
        </AutoSizer>
    );
}
