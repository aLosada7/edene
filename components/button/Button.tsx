import './styles.scss';

export interface ButtonProps {
  id?: string;
  children?: JSX.Element | string;
}

export function Button(props: ButtonProps) {
  return (
    <button type="button" id={props.id} className="btn">
      {props.children}
    </button>
  );
}

export default Button;
