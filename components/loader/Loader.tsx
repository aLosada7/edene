import { Blocks } from './Blocks';
import { TableLoader } from './TableLoader';

export type LoaderType = 'blocks' | 'table';

export interface LoaderProps {
  type: LoaderType;
}

export function Loader(props: LoaderProps) {
  const getComponent = () => {
    switch (props.type) {
      case 'blocks':
        return <Blocks />;
      case 'table':
        return <TableLoader />;
    }
  };
  return <div>{getComponent()}</div>;
}

export default Loader;
