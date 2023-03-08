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
          maxWidth: 1024,
          display: "flex",
          alignContent: "center",
          margin: "0 auto",
        }}
      >
        <div className="intro">
          <Typography variant="body1">
            Welcome! My name is Kimberly Blankenstein, and I'm a Senior Software
            Engineer at Lockheed Martin Space, located in Colorado. I know you
            just got here, but I want to thank you for visiting my website!
          </Typography>
          <br />
          <Typography variant="body1">
            For a little over twenty years now, I have been independently
            researching and sharing the life story of Flight Officer Joseph H.
            Noyes, from Seattle — a Flying Fortress pilot who served with the
            95th Bomb Group (H) during the Second World War.
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
            Please know that I am not related to anyone who served on The Joe
            Noyes Crew or a veteran of the 95th Bomb Group (H). I am simply a
            volunteer and advocate for this crew and their families. I spend my
            own money to host this website and continue with my research
            project. If you would like to help buy me a coffee or a beer, I do
            accept donations through the PayPal link at the bottom of this page.
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
