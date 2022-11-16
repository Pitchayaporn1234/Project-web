import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import { createStyles, makeStyles, Box, Button, Link } from "@material-ui/core";
import { pdf } from "./statement";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import RemoveIcon from "@material-ui/icons/Remove";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.background.paper,
      width: 500,
      position: "relative",
      minHeight: 200,
    },
    fab: {
      position: "fixed",
      bottom: theme.spacing(2),
      right: theme.spacing(2),
      zIndex: 500,
    },
    fadd: {
      position: "fixed",
      bottom: theme.spacing(10),
      right: theme.spacing(2),
      zIndex: 500,
    },
    printButton: {
      "@media print": {
        display: "none",
      },
    },
  })
);

const App = () => {
  const styles = useStyles();

  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1.0);

  handlePrint = () => {
    window.print();
  };

  const handleScale = () => {
    setScale(scale + 0.5);
  };

  return (
    <Box>
      <Fab color="primary" aria-label="add" className={styles.fab}>
        <AddIcon onClick={handleScale} />
      </Fab>
      <Fab color="secondary" aria-label="edit" className={styles.fadd}>
        <RemoveIcon />
      </Fab>
      <Document
        className={styles.printDoc}
        file={pdf}
        options={{ workerSrc: "./public/pdf.worker.js" }}
        scale={scale}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <Button className={styles.printButton} onClick={handlePrint}>
        Print
      </Button>
      <Link href={pdf} download className={styles.printButton}>
        Download
      </Link>
    </Box>
  );
};
export default App;
