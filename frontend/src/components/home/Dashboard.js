/**@jsx jsx */
import { css, jsx } from "@emotion/core";

//Local components
import { useContent } from "../context/ContentContext";
import HomePanel from "./HomePanel";

export default function Dashboard(props) {
  const { contentPerModules, percentagePerModules, handleOnClick } = props;

  const { modules } = useContent();

  const homePanels = modules.map(module => {
    let moduleList;
    let percentage;

    switch (module.number) {
      case 1:
        moduleList = contentPerModules.md1;
        percentage = percentagePerModules.prc1;
        break;
      case 2:
        moduleList = contentPerModules.md2;
        percentage = percentagePerModules.prc2;
        break;
      case 3:
        moduleList = contentPerModules.md3;
        percentage = percentagePerModules.prc3;
        break;
      case 4:
        moduleList = contentPerModules.md4;
        percentage = percentagePerModules.prc4;
        break;
      case 5:
        moduleList = contentPerModules.md5;
        percentage = percentagePerModules.prc5;
        break;
      case 6:
        moduleList = contentPerModules.md6;
        percentage = percentagePerModules.prc6;
        break;
      case 7:
        moduleList = contentPerModules.md7;
        percentage = percentagePerModules.prc7;
        break;
      case 8:
        moduleList = contentPerModules.md8;
        percentage = percentagePerModules.prc8;
        break;
      case 9:
        moduleList = contentPerModules.md9;
        percentage = percentagePerModules.prc9;
        break;
      default:
        break;
    }

    return (
      <div key={module.id} css={cardGroup}>
        <HomePanel
          header={module.title}
          number={module.number}
          moduleList={moduleList}
          percentage={percentage}
          handleOnClick={handleOnClick}
        />
      </div>
    );
  });

  return (
    <div css={container}>
      <div css={pageheader}>My Dashboard</div>
      <hr css={divider} />
      <div css={cardscontainer}>{homePanels}</div>
    </div>
  );
}

const viewheader = css`
  font-family: "Fira Sans", sans-serif;
  font-size: 48px;
  font-weight: 200;
  padding-left: 90px;
  padding-top: 10px;
  color: rgb(78, 78, 78);
  width: 100%;
  padding-bottom: 10px;
  background-color: white;
`;

const container = css`
  //height: 728px;
`;

const pageheader = css`
  ${viewheader};
`;

const divider = css`
  margin: 0;
  border: 0.5px solid lightgrey;
`;

const cardscontainer = css`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-start;
  margin-left: 120px;
  margin-right: 120px;
  margin-top: 16px;
`;

const cardGroup = css`
  flex-basis: 550px;
`;
