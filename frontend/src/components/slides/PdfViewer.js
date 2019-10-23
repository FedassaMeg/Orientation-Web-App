import React, { useState, useEffect } from "react";

import slide1 from "./slide1.pdf";
import pdfbackend from "./pdfjs";
import pdfbe from "./pdfjs";

export default function PdfView() {
  useEffect(() => {
    const { src } = slide1;
    const viewerRef = pdfbe.getViewerRef();
    //console.log(viewerRef);
    const element = viewerRef.current;
    // console.log(pdfbackend);
    // pdfbe.init(src, element);
  }, []);

  /* const viewerRef = () => {
    return
  };*/

  return <div id="viewer" ref={pdfbe.getViewerRef()}></div>;
}
