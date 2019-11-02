/**@jsx jsx */
import { useEffect, useState } from "react";
import { css, jsx } from "@emotion/core";
import axios from "axios";
import jwt from "jsonwebtoken";
import { capitalize } from "lodash";

import { ROOT_URL } from "../utils/constants";
import accountImage from "../../images/badge.jpg";

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
      .get(`${ROOT_URL}/users/${userId}`, config)
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
  const firstName = capitalize(user.first_name);
  const lastName = capitalize(user.last_name);
  return (
    <div css={headerbar}>
      <div>
        <img src={accountImage} css={image} alt="account-img" />
      </div>
      <div css={infoContainer}>
        <div css={name}>
          {firstName} {lastName}
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
`;

const role = css`
  font: 16px "Ubuntu", sans-serif;
  color: whitesmoke;
`;
