/**@jsx jsx */
import { css, jsx } from "@emotion/core";

import { useState } from "react";

export default function Panel(props) {
  const { header, module, list, percentage } = props;

  const [expand, setExpand] = useState(false);

  const handleOnClick = () => {
    setExpand(!expand);
  };

  return (
    <Card>
      <div css={container}>
        <PanelHead
          expand={expand}
          header={header}
          module={module}
          percentage={percentage}
          handleOnClick={handleOnClick}
        />
        <PanelBody expand={expand} list={list} />
      </div>
    </Card>
  );
}

const container = css`
  display: flex;
  flex-direction: column;
`;
