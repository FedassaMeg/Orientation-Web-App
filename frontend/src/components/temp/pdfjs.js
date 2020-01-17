import React from "react";

class pdfbackend extends React.Component {
  constructor() {
    super();
    this.viewerRef = React.createRef();
  }

  init = (source, element) => {
    // const textNode = document.createElement("p");
    //textNode.innerHTML = `Our PDF source will be: ${source}`;
    //element.appendChild(textNode);
    console.log("source", source);
    console.log("element", element);
  };
  getViewerRef() {
    return this.viewerRef;
  }
}
export default new pdfbackend();
