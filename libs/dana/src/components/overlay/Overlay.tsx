import { overlay } from './styles';

export const Overlay = ({ onClick }: { onClick: () => void }) => {
    return <div css={overlay} onClick={onClick}></div>;
};
