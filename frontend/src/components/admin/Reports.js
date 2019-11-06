import React from "react";
import PdfComponent from "../unused/PdfComponent";
import * as jsPDF from "jspdf";
export default function Reports() {
  const file = () => {
    const doc = new jsPDF();
    doc.text("Test", 10, 10);
    doc.save("a4.pdf");
  };

  return (
    <div>
      <button onClick={file}>File</button>
    </div>
  );
}
