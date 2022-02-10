import { spinnerBlocks } from './styles';

export function Blocks() {
  return (
    <div css={spinnerBlocks}>
      <div></div>
      <div className="shape2"></div>
      <div className="shape3"></div>
      <div className="shape4"></div>
      <div className="shape5"></div>
    </div>
  );
}

export default Blocks;
