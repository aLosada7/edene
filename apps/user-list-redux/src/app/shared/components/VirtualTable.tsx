import { FixedSizeList, FixedSizeListProps } from 'react-window';
import InfiniteLoader from 'react-window-infinite-loader';
import AutoSizer from 'react-virtualized-auto-sizer';
import {
    createContext,
    CSSProperties,
    forwardRef,
    useContext,
    ReactElement,
} from 'react';
import { Table } from '@dana-components';

export interface VirtualTableProps
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
    loadNextPage: () => void;
    Header: ReactElement;
    Row: unknown;
}

interface InnerProps {
    Header: ReactElement;
}

/** Context for cross component communication */
const VirtualTableContext = createContext<InnerProps>({
    Header: <></>,
});

/**
 * The Inner component of the virtual list. This is the "Magic".
 * Capture what would have been the top elements position and apply it to the table.
 * Render an optional header.
 **/
const Inner = forwardRef<HTMLDivElement, React.HTMLProps<HTMLDivElement>>(
    function Inner({ children, ...rest }, ref) {
        const { Header } = useContext(VirtualTableContext);
        return (
            <div {...rest} ref={ref}>
                <Table>
                    {Header}
                    <tbody style={{ position: 'absolute', right: 0, left: 0 }}>
                        {children}
                    </tbody>
                </Table>
            </div>
        );
    }
);

function VirtualTableRow({
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
    if (!isItemLoaded(index)) return <></>;
    return <Row index={index} style={style} />;
}

export default function VirtualTable({
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
    Header,
    Row,
}: VirtualTableProps) {
    // If there are more items to be loaded then add an extra row to hold a loading indicator.
    const itemCount = hasNextPage ? items.length + 1 : items.length;

    // Only load 1 page of items at a time.
    // Pass an empty callback to InfiniteLoader in case it asks us to load more than once.
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const loadMoreItems = isNextPageLoading ? () => {} : loadNextPage;

    // Every row is loaded except for our loading indicator row.
    const isItemLoaded = (index: number) =>
        !hasNextPage || index < items.length;

    return (
        <VirtualTableContext.Provider value={{ Header }}>
            <AutoSizer>
                {({ height, width }) => (
                    <InfiniteLoader
                        isItemLoaded={isItemLoaded}
                        itemCount={itemCount}
                        loadMoreItems={loadMoreItems}
                    >
                        {({ onItemsRendered, ref }) => (
                            <FixedSizeList
                                height={height}
                                itemCount={itemCount}
                                itemSize={40}
                                onItemsRendered={onItemsRendered}
                                ref={ref}
                                width={width}
                                innerElementType={Inner}
                            >
                                {({ index, style }) => (
                                    <VirtualTableRow
                                        isItemLoaded={isItemLoaded}
                                        Row={Row}
                                        index={index}
                                        style={style}
                                    />
                                )}
                            </FixedSizeList>
                        )}
                    </InfiniteLoader>
                )}
            </AutoSizer>
        </VirtualTableContext.Provider>
    );
}
