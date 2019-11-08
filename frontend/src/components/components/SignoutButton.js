/**@jsx jsx */
import { css, jsx } from "@emotion/core";
import { withRouter } from "react-router-dom";

function SignoutButton(props) {
  const handleOnClick = event => {
    event.preventDefault();
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("userIsStaff");
    props.history.push("/");
  };

  return (
    <button css={signoutBtn} onClick={handleOnClick}>
      {props.children}
    </button>
  );
}

export default withRouter(SignoutButton);

const signoutBtn = css`
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  background-color: #289086;
  color: white;
  font: 16px "Open Sans", san-serif;
`;
