import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import slide1 from "./slide1.pdf";

export default function PdfViewer() {
  let initialState = {
    numPages: null,
    pageNumber: 1
  };
  const [state, setstate] = useState(initialState);
  const onDocumentLoadSuccess = ({ numPages }) => {
    setstate({ numPages });
  };

  return (
    <div>
      <Document
        file={slide1}
        onLoadSuccess={onDocumentLoadSuccess}
        onLoadError={error => {
          console.error("Load error");
          console.error(error);
        }}
        onSourceSuccess={success => {
          console.log("Source success");
          console.log(success);
        }}
        onSourceError={error => {
          console.error("Source error");
          console.error(error);
        }}
      >
        <Page pageNumber={state.pageNumber} />
      </Document>
      <p>
        Page {state.pageNumber} of {state.numPages}
      </p>
    </div>
  );
}
