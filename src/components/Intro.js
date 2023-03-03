import "./Intro.css";
import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "ag-grid-community/styles//ag-grid.css";
import "ag-grid-community/styles//ag-theme-alpine.css";

const Intro = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          maxWidth: 700,
          display: "flex",
          alignContent: "center",
          margin: "0 auto",
        }}
      >
        <div className="intro">
          <Typography variant="body1">
            Welcome! My name is{" "}
            <a
              href="https://www.linkedin.com/in/kimberlyannblankenstein/"
              target="_blank"
            >
              Kimberly Blankenstein
            </a>,
            and I work as a Senior Software Engineer for Lockheed Martin Space,
            located in Colorado. For over twenty years, I have been
            independently researching and sharing the life story of Flight
            Officer Joseph H. Noyes, from Seattle — a Flying Fortress pilot who
            served with the 95th Bomb Group (H) during the Second World War.
          </Typography>
          <br />
          <Typography variant="body1">
            As a teenager, I became uniquely fascinated with World War Two, and
            The Mighty Eighth Air Force, and I spent countless hours immersed in
            military history reading material. Then, I stumbled across the book
            B-17s Over Berlin on a shelf at a bookstore and noticed a group
            photograph within its pages, and in that photograph, by some
            destiny, I found Joe Noyes.
          </Typography>
          <br />
          <Typography variant="body1">
            In answer to a question I get asked frequently, I am not related to
            anyone who served on The Joe Noyes Crew or a veteran of the 95th
            Bomb Group (H). I am a volunteer and advocate for the crew and their
            families, and I am grateful for the support of these parties over
            the last 20 years.
          </Typography>
          <br />
          <Typography variant="body1">
            Nine men from The Joe Noyes Crew remain officially Missing in Action
            today, and I've always felt great sadness for the families they left
            behind in 1943. Years ago, I built a simple website as an online
            memorial to their short but inspiring lives and to share their
            stories with interested parties worldwide. May we never forget them
            and their enduring sacrifice.
          </Typography>
        </div>
      </Box>
    </>
  );
};

export default Intro;
