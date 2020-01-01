/**@jsx jsx */
import { css, jsx } from "@emotion/core";

//Local components
import { useUser } from "../context/UserContext";
import accountImage from "../../images/badge.jpg";

const determineUserRole = id => {
  let newUserRole;
  if (id === 17 || id === 18) return (newUserRole = "Office Staff");
  if (id === 21) return (newUserRole = "Nurse (RN)");
  if (id === 24) return (newUserRole = "Nurse (LVN)");
  if (id === 27) return (newUserRole = "Hospice Aide");
  if (id === 29) return (newUserRole = "Spiritual Care Provider");
  if (id === 31) return (newUserRole = "Medical Social Worker");
  return newUserRole;
};

export default function HeaderBar() {
  const { user } = useUser();

  const usrRole = determineUserRole(user.role);

  return (
    <div css={container}>
      <div>
        <img src={accountImage} css={image} alt="account-img" />
      </div>
      <div css={usrInfo}>
        <div css={name}>
          {user.first_name} {user.last_name}
        </div>
        <div css={role}>{usrRole}</div>
      </div>
    </div>
  );
}

// emotion styling

const container = css`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  padding: 16px;
  background-color: rgb(124, 212, 204);
`;

const image = css`
  width: 80px;
  height: 80px;
  border-radius: 50%;
`;

const usrInfo = css`
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
