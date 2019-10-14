import React, { useState, useEffect } from "react";
import PropType from "prop-types";

import AccordionItem from "./AccordionItem";

export default function Accordion(props) {
  const [openSec, setOpenSec] = useState({});

  useEffect(() => {
    loadChildren();
  }, []);

  const loadChildren = () => {
    props.children.forEach(child => {
      if (child.props.isOpen) {
        setOpenSec({ [child.props.label]: true });
      }
    });
  };

  const handleOnClick = label => {
    const isOpen = !!openSec[label];
    setOpenSec({ ...openSec, [label]: !isOpen });
  };
  return (
    <div>
      {props.children.map((child, index) => (
        <AccordionItem
          isOpen={!!openSec[child.props.label]}
          label={child.props.label}
          handleOnClick={handleOnClick}
          key={index}
        >
          {child.props.children}
        </AccordionItem>
      ))}
    </div>
  );
}

Accordion.propType = {
  children: PropType.instanceOf(Object).isRequired
};
