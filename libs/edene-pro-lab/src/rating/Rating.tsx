export interface RatingProps {
    // from 0 to 5
    stars: number;
}

export const Rating = ({ stars }: RatingProps) => {
    if (stars < 0 || stars > 5) throw new Error(`Invalid rating`);

    return <span>{`★★★★★☆☆☆☆`.slice(5 - stars, 10 - stars)}</span>;
};
