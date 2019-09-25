/**@jsx jsx */
import { useEffect, useState } from "react";
import { css, jsx } from "@emotion/core";
import axios from "axios";
import jwt from "jsonwebtoken";

export default function HeaderBar() {
  const initialState = {
    first_name: "",
    last_name: "",
    role: ""
  };
  const [user, setUser] = useState(initialState);
  useEffect(() => {
    getCurrentUser();
  }, []);

  const getCurrentUser = () => {
    let config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    };
    const userId = getUserIdfromToken();
    axios
      .get(`http://localhost:8000/api/users/${userId}`, config)
      .then(res => {
        setUser({
          first_name: res.data.first_name,
          last_name: res.data.last_name,
          role: res.data.role
        });

        return res.data;
      })
      .catch(err => {
        console.log(err);
      });
  };
  const getUserIdfromToken = () => {
    const token = localStorage.getItem("token");
    const decode = jwt.decode(token);
    return decode.user_id;
  };
  return (
    <div css={headerbar}>
      <div css={name}>
        {user.first_name} {user.last_name}
      </div>
      <div css={role}>{user.role}</div>
    </div>
  );
}

// emotion styling
const headerbar = css`
    background-color: #289086;
    width = 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: baseline;
`;

const name = css`
  padding-left: 18px;
  padding-top: 4px;
  padding-bottom: 4px;
  font: 24px "Open Sans", san-serif;
  color: white;
`;

const role = css`
  padding-left: 18px;
  padding-top: 4px;
  padding-bottom: 4px;
  font: 18px "Open Sans", san-serif;
  color: white;
`;
