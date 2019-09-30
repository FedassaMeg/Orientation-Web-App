/**@jsx jsx */
import { css, jsx } from "@emotion/core";

import Admin from "../components/admin/Admin";

export default function AdminPage() {
  return (
    <div css={container}>
      <Admin />
    </div>
  );
}

const container = css`
  display: flex;
  flex-direction: column;
`;
