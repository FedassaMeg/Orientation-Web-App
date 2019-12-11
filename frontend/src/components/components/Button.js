/**@jsx jsx */
import { css, jsx } from "@emotion/core";
export default function Button(props) {
  return (
    <button onClick={props.onClick} css={button} {...props}>
      {props.children}
    </button>
  );
}
// login button styles
const button = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-self: center;
  width: 160px;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-right: 15px;
  border: none;
  margin-top: 36px;
  color: #606060;
  font: 16px "Roboto", sans-serif;
  font-weight: 300;
  background: none;
  transition-duration: 0.4s;

  &:hover {
    color: #202020;
    background-color: whitesmoke;
  }
`;
