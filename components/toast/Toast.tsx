import { Col, Row, SvgArrowRight, Text, Button, SvgSuccess } from '@dana';
import { SerializedStyles } from '@emotion/react';
import { toast as toastCss, closeButton as closeButtonCss } from './styles';

export type ToastPosition =
    | 'BOTTOM_RIGHT'
    | 'BOTTOM_LEFT'
    | 'TOP_RIGHT'
    | 'TOP_LEFT';

export interface ToastOptions {
    position?: ToastPosition;
    closeButton?: boolean;
    autoClose?: number;
}

export interface ToastProps {
    id: string;
    position?: ToastPosition;
    closeButton?: boolean;
    /**
     * Time in seconds to close the toast
     */
    autoClose?: number;
    children: JSX.Element;
    cssOverrides?: SerializedStyles | SerializedStyles[];
}

export const Toast = ({
    id,
    closeButton = true,
    cssOverrides,
    children,
    ...props
}: ToastProps) => {
    return (
        <div id={id} css={[toastCss, cssOverrides]}>
            <Row>
                <Col sm={6} lg={4}>
                    <Button color="transparent" size="xsmall">
                        <SvgSuccess size="small" />
                    </Button>
                </Col>
                <Col sm={12} lg={16} direction="column">
                    {children}
                    {/* <Text weight="medium">Campaign saved!</Text>
                    <Text mt={6} size="md">
                        Margaret Young has received your notification to follow.
                    </Text> */}
                </Col>
            </Row>
            <Button
                color="transparent"
                size="xsmall"
                cssOverrides={closeButtonCss}
            >
                <SvgArrowRight size="xsmall" />
            </Button>
        </div>
    );
};
