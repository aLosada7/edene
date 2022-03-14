import React, { Children, cloneElement, ReactElement, useState } from 'react';
import { Props } from '../../helpers';
import { tabs } from './styles';

export interface TabsProps extends Props {
    children: ReactElement | ReactElement[];
}

export const Tabs = ({ children, cssOverrides, ...props }: TabsProps) => {
    const initialTab = Array.isArray(children) ? children[0] : children;

    const [tabSelected, setTabSelected] = useState<string | null>(
        initialTab.props.id
    );
    const [tabSelectedChildren, setTabSelectedChildren] = useState(
        initialTab.props.children
    );

    return (
        <>
            <ul css={tabs} role="tablist">
                {Children.map(children, (child) => {
                    return cloneElement(child, {
                        tabSelected: tabSelected === child.props.id,
                        setTabSelected,
                        setTabSelectedChildren,
                    });
                })}
            </ul>
            {tabSelectedChildren}
        </>
    );
};
