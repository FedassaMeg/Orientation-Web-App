// import React, { useRef, useEffect } from "react";
// import PropTypes from "prop-types";

// import pdfjs from "pdfjs-dist";
// import pdfjsWorker from "pdfjs-dist/build/pdf.worker.entry";

// pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;

// const PdfComponent = ({ src }) => {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const fetchPdf = async () => {
//       const loadingTask = pdfjs.getDocument(src);

//       const pdf = await loadingTask.promise;

//       const firstPageNumber = 1;

//       const page = await pdf.getPage(firstPageNumber);

//       const scale = 1.5;
//       const viewport = page.getViewport({ scale: scale });

//       // Prepare canvas using PDF page dimensions
//       const canvas = canvasRef.current;

//       const context = canvas.getContext("2d");
//       canvas.height = viewport.height;
//       canvas.width = viewport.width;

//       // Render PDF page into canvas context
//       const renderContext = {
//         canvasContext: context,
//         viewport: viewport
//       };
//       const renderTask = page.render(renderContext);

//       await renderTask.promise;
//     };

//     fetchPdf();
//   }, [src]);

//   return (
//     <canvas
//       ref={canvasRef}
//       width={window.innerWidth}
//       height={window.innerHeight}
//     />
//   );
// };

// PdfComponent.propTypes = {
//   src: PropTypes.string
// };

// PdfComponent.defaultProps = {
//   src: `${process.env.PUBLIC_URL}/slide1.pdf`
// };

// export default PdfComponent;

import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";

import pdfjs from "pdfjs-dist";
import pdfjsWorker from "pdfjs-dist/build/pdf.worker.entry";

pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;

const PdfComponent = ({ src }) => {
  const [pageNum, setPageNum] = useState(1);
  const [pageRendering, setPageRendering] = useState(false);
  const [pageNumPending, setPageNumPending] = useState(null);
  const [totalPgs, setTotalPgs] = useState();
  // const [pdfDoc, setPdfDoc] = useState(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    let pdfDoc = null;
    pdfjs.getDocument(src).promise.then(pdf => {
      pdfDoc = pdf;
      setTotalPgs(pdfDoc.numPages);
      renderPage(pageNum, pdfDoc);
    });
  }, [src]);

  const renderPage = (num, pdfDoc) => {
    setPageRendering(true);
    pdfDoc.getPage(num).then(page => {
      const scale = 1.5;
      const viewport = page.getViewport({ scale: scale });
      const canvas = canvasRef.current;

      const context = canvas.getContext("2d");
      canvas.height = viewport.height;
      canvas.width = viewport.width;
      const renderContext = {
        canvasContext: context,
        viewport: viewport
      };
      const renderTask = page.render(renderContext);

      renderTask.promise.then(() => {
        setPageRendering(false);
        if (pageNumPending !== null) {
          renderPage(pageNumPending);
          setPageNumPending(null);
        }
      });
    });
  };

  const queueRenderPage = num => {
    if (pageRendering) {
      setPageNumPending(num);
    } else {
      renderPage(num);
    }
  };

  const prevPage = () => {
    if (pageNum <= 1) {
      return;
    }
    pageNum--;
    queueRenderPage(pageNum);
  };

  const nextPage = () => {
    if (pageNum >= totalPgs) {
      return;
    }

    setPageNum(pageNum + 1);
    queueRenderPage(pageNum);
  };
  return [
    <div>
      <button onClick={prevPage}>Prev.</button>
      <button onClick={nextPage}>Next</button>
      <br />
      <div>
        {pageNum} of {totalPgs}
      </div>
    </div>,
    <canvas
      ref={canvasRef}
      width={window.innerWidth}
      height={window.innerHeight}
    />
  ];
};

PdfComponent.propTypes = {
  src: PropTypes.string
};

PdfComponent.defaultProps = {
  src: `${process.env.PUBLIC_URL}/slide1.pdf`
};

export default PdfComponent;
