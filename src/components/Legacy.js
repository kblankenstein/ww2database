import "./Legacy.css";
import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "ag-grid-community/styles//ag-grid.css";
import "ag-grid-community/styles//ag-theme-alpine.css";

const Legacy = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          maxWidth: 1024,
          display: "flex",
          alignContent: "center",
          margin: "0 auto",
        }}
      >
        <div className="legacy">
          <Typography variant="body1">
            Legacy content goes here.
          </Typography>
        </div>
      </Box>
    </>
  );
};

export default Legacy;
