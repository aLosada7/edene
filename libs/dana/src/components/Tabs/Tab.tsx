import { ReactElement } from 'react';
import { Props } from '../../helpers';
import { Button } from '../Button';
import { tab, tabSelected } from './styles';

export interface TabProps extends Props {
    id: string;
    label: string;
    tabSelected?: boolean;
    setTabSelected?: any;
    setTabSelectedChildren?: any;
    children: ReactElement | ReactElement[];
}

export const Tab = ({
    id,
    label,
    children,
    cssOverrides,
    ...props
}: TabProps) => {
    return (
        <li css={[tab, props.tabSelected && tabSelected]}>
            <Button
                variant="link"
                color="dark"
                onClick={() => {
                    props.setTabSelected(id);
                    props.setTabSelectedChildren(children);
                }}
            >
                {label}
            </Button>
        </li>
    );
};
