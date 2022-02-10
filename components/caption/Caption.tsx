import { Props } from '../../libs/dana/src/helpers';
import { figcaption } from './styles';

export interface CaptionProps extends Props {
  text: string;
}

export const Caption = ({ text, cssOverrides, ...props }: CaptionProps) => {
  return <figcaption css={figcaption}>{text}</figcaption>;
};

export default Caption;
