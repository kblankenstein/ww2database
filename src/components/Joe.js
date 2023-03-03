import "./Joe.css";
import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "ag-grid-community/styles//ag-grid.css";
import "ag-grid-community/styles//ag-theme-alpine.css";

const Joe = () => {
  return (
    <>
      <Box sx={{ width: "100%", maxWidth: 700 }}>
        <div className="joe">
        <Typography variant="body1">
        Joseph Herbert Noyes was born to Walter and Frances Noyes on August
        11th, 1921, in Beach, North Dakota. He had two younger brothers, Robert
        (Bob) and Walter, and they grew up at 410 West Lee Street, on Queen Anne
        Hill in Seattle, Washington.
          </Typography>
          <br />
          <Typography variant="body1">
          While attending Queen Anne High School, Joe aspired to attend The Boeing
        School of Aeronautics in California. From a young age, he knew he wanted
        to become a pilot, and everyone who knew him was acutely aware of his
        ambitions.
          </Typography>
          <br />
          <Typography variant="body1">
          As one of the first of his peers to obtain a driver's license, he
        utilized this privilege by delivering food for a local grocer. That was
        his first real job, and he made the best of every minute of his
        employment. Occasionally, he even used this opportunity to visit his
        girlfriend, Donna Davis.
          </Typography>
          <br />
          <Typography variant="body1">
          Joe Noyes is fondly remembered for being hard-working, dedicated to his
        commitments, and possessing a keen sense of humor.
          </Typography>
        </div>
      </Box>
      <div class="resources">
        <Typography variant="body2">
          These resources were utilized in the development of this content:
          <br />
          <a href="https://95thbgdb.com/" target="_blank">
            The 95th Bomb Group (H) Searchable Database
          </a>
        </Typography>
      </div>
    </>
  );
};

export default Joe;
