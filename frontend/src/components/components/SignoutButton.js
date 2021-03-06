/**@jsx jsx */
import { css, jsx } from "@emotion/core";
import { withRouter } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function SignoutButton(props) {
  const { logout } = useAuth();
  const handleOnClick = event => {
    event.preventDefault();
    logout();
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("userIsStaff");
    props.history.push("/login");
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
  border-radius: 3px;
  background-color: #289086;
  color: white;
  font: 18px "Roboto", san-serif;
  font-style: 800;
`;
