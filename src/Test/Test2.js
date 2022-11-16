import React, { useRef, useEffect } from "react";
//import "./styles.css";
import CloudPdfViewer from "@openbook/cloudpdf-viewer";
export default function App() {
  const viewer = useRef(null);
  useEffect(() => {
    CloudPdfViewer(
      {
        documentId: "eee2079d-b0b6-4267-9812-b6b9eadb9c60",
        darkMode: true,
      },
      viewer.current
    ).then((instance) => {});
  }, []);
  return (
    <div className="app">
      <div className="viewer" ref={viewer}></div>
    </div>
  );
}
