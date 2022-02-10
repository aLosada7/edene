import './styles.scss';

export interface ButtonGroupProps {
  children?: React.ReactNode;
}

export function ButtonGroup(props: ButtonGroupProps) {
  return (
    <div className="btn-group" role="group">
      {props.children}
    </div>
  );
}

export default ButtonGroup;
