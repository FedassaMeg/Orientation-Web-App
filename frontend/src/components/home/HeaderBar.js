/**@jsx jsx */
import { css, jsx } from "@emotion/core";

import { useUser } from "../context/UserContext";
import accountImage from "../../images/badge.jpg";

export default function HeaderBar() {
  const { user } = useUser();

  return (
    <div css={headerbar}>
      <div>
        <img src={accountImage} css={image} alt="account-img" />
      </div>
      <div css={infoContainer}>
        <div css={name}>
          {user.first_name} {user.last_name}
        </div>
        <div css={role}>{user.role}</div>
      </div>
    </div>
  );
}

// emotion styling
const headerbar = css`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  padding: 16px;
  background-color: rgb(124, 212, 204);
  box-shadow: inset -100px 100px 100px srgba(153, 130, 0, 0.1);
`;

const image = css`
  border-radius: 50%;
  width: 80px;
  height: 80px;
`;

const infoContainer = css`
  display: flex;
  flex-direction: column;
  margin-left: 24px;
`;

const name = css`
  font: 24px "Ubuntu", sans-serif;
  color: whitesmoke;
  text-transform: capitalize;
`;

const role = css`
  font: 16px "Ubuntu", sans-serif;
  color: whitesmoke;
`;
