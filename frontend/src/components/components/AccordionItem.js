/**@jsx jsx */
import { css, jsx } from "@emotion/core";
import PropTypes from "prop-types";

export default function AccordionItem(props) {
  return (
    <div>
      <div onClick={() => props.handleOnClick(props.label)}>{props.label}</div>
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
