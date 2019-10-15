/**@jsx jsx */
import { css, jsx } from "@emotion/core";
import PropTypes from "prop-types";
import { MdExpandMore, MdExpandLess } from "react-icons/md";

export default function AccordionItem(props) {
  return (
    <div css={container}>
      <div css={header}>
        <div css={section}>{props.label}</div>
        <div onClick={() => props.handleOnClick(props.label)} css={expandBtn}>
          {props.isOpen ? <MdExpandLess /> : <MdExpandMore />}
        </div>
      </div>
      {props.isOpen && <div>{props.children}</div>}
    </div>
  );
}

AccordionItem.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
  isOpen: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  handleOnClick: PropTypes.func.isRequired
};

const container = css`
  width: 350px;
  padding-top: 8px;
  padding-left: 36px;
  display: flex;
  flex-direction: column;
`;

const header = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const section = css`
  font-size: 16px;
  font-weight: 400;
`;
const expandBtn = css`
  margin-right: 16px;
  padding-bottom: 4px;
`;
