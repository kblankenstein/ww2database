import "./Crew.css";
import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import "ag-grid-community/styles//ag-grid.css";
import "ag-grid-community/styles//ag-theme-alpine.css";

const Crew = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    margin: 6,
    color: theme.palette.text.secondary,
  }));

  return (
    <>
      <div className="crew">
        <Box sx={{ width: "100%" }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid xs={6}>
              <Item className="paper">
                <MilitaryTechIcon color="#222" fontSize="large" />
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  <Tooltip
                    title="The B-17 pilot served as the airplane commander, and was responsible for flying a 10-man weapon, while ensuring the safety and efficiency of his crew."
                    arrow
                  >
                    <Button>Pilot</Button>
                  </Tooltip>
                </Typography>
                <Typography variant="h5" component="div">
                  Joseph H. Noyes
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Flight Officer
                </Typography>
                <Typography variant="body2">
                  <b>from:</b>
                  <br />
                  Seattle, Washington
                </Typography>
              </Item>
            </Grid>
            <Grid xs={6}>
              <Item className="paper">
                <MilitaryTechIcon color="#222" fontSize="large" />
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  <Tooltip
                    title="The B-17 co-pilot served as the executive officer and strong right arm to the pilot, and was fully trained and capable of taking over the crew at any time."
                    arrow
                  >
                    <Button>Co-Pilot</Button>
                  </Tooltip>
                </Typography>
                <Typography variant="h5" component="div">
                  David F. Prees
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  2nd Lieutenant
                </Typography>
                <Typography variant="body2">
                  <b>from:</b>
                  <br />
                  Milwaukee, Wisconsin
                </Typography>
              </Item>
            </Grid>
            <Grid xs={6}>
              <Item className="paper">
                <MilitaryTechIcon color="#222" fontSize="large" />
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  <Tooltip
                    title="The B-17 navigator served the crew by determining their geographic positions through (a) pilotage, (b) dead reckoning, (c) radio, (d) celestial navigation, or any combination of these four methods."
                    arrow
                  >
                    <Button>Navigator</Button>
                  </Tooltip>
                </Typography>
                <Typography variant="h5" component="div">
                  Frank A. Roth
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  2nd Lieutenant
                </Typography>
                <Typography variant="body2">
                  <b>from:</b>
                  <br />
                  Union City, New Jersey
                </Typography>
              </Item>
            </Grid>
            <Grid xs={6}>
              <Item className="paper">
                <MilitaryTechIcon color="#222" fontSize="large" />
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  <Tooltip
                    title="The success or failure of each 8th USAAF mission depended upon what the B-17 bombardier accomplished during the short interval of the bombing run. The bombardier was responsible for ensuring accurate and effective bombing."
                    arrow
                  >
                    <Button>Bombardier</Button>
                  </Tooltip>
                </Typography>
                <Typography variant="h5" component="div">
                  Rex A. Rice
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  2nd Lieutenant
                </Typography>
                <Typography variant="body2">
                  <b>from:</b>
                  <br />
                  Anderson, South Carolina
                </Typography>
              </Item>
            </Grid>
            <Grid xs={6}>
              <Item className="paper">
                <MilitaryTechIcon color="#222" fontSize="large" />
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  <Tooltip
                    title="The B-17 engineer served the crew in a highly technical way, meaning he probably knew more about the B-17 than any other crewmember on board. The engineer was the chief source of information concerning the airport and equipment."
                    arrow
                  >
                    <Button>Top Turret & Engineer</Button>
                  </Tooltip>
                </Typography>
                <Typography variant="h5" component="div">
                  William E. Clapper
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Technical Sergeant
                </Typography>
                <Typography variant="body2">
                  <b>from:</b>
                  <br />
                  Cowley County, Kansas
                </Typography>
              </Item>
            </Grid>
            <Grid xs={6}>
              <Item className="paper">
                <MilitaryTechIcon color="#222" fontSize="large" />
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  <Tooltip
                    title="The B-17 radio operator served the crew through his technical knowledge, and by rendering position reports, assisting the navigator, and overall maintaining the radio equipment and navigational aid equipment on board."
                    arrow
                  >
                    <Button>Radio Operator</Button>
                  </Tooltip>
                </Typography>
                <Typography variant="h5" component="div">
                  Edgar A. Lajoie
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Technical Sergeant
                </Typography>
                <Typography variant="body2">
                  <b>from:</b>
                  <br />
                  Providence, Rhode Island
                </Typography>
              </Item>
            </Grid>
            <Grid xs={6}>
              <Item className="paper">
                <MilitaryTechIcon color="#222" fontSize="large" />
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  <Tooltip
                    title="The B-17 waist gunner was considered a flexible gunner, and he required a fine sense of timing and familiarity with the rudiments of exterior ballistics, and solid knowledge of the coverage area for all B-17 gun positions."
                    arrow
                  >
                    <Button>Waist Gunner</Button>
                  </Tooltip>
                </Typography>
                <Typography variant="h5" component="div">
                  William L. Cochran
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Staff Sergeant
                </Typography>
                <Typography variant="body2">
                  <b>from:</b>
                  <br />
                  Texas
                </Typography>
              </Item>
            </Grid>
            <Grid xs={6}>
              <Item className="paper">
                <MilitaryTechIcon color="#222" fontSize="large" />
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  <Tooltip
                    title="The B-17 ball power turret gunner was located in the Sperry turret, which required many mental and physical qualities, and most importantly, a delicate touch. Failure to set the target dimension dial properly on the K-type sight would result in a miscalculation of range. "
                    arrow
                  >
                    <Button>Ball Turret Gunner</Button>
                  </Tooltip>
                </Typography>
                <Typography variant="h5" component="div">
                  Robert H. Willis
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Staff Sergeant
                </Typography>
                <Typography variant="body2">
                  <b>from:</b>
                  <br />
                  North Carolina
                </Typography>
              </Item>
            </Grid>
            <Grid xs={6}>
              <Item className="paper">
                <MilitaryTechIcon color="#222" fontSize="large" />
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  <Tooltip
                    title="The B-17 tail gunner was considered a flexible gunner, and he required a fine sense of timing and familiarity with the rudiments of exterior ballistics, and solid knowledge of the coverage area for all B-17 gun positions."
                    arrow
                  >
                    <Button>Tail Gunner</Button>
                  </Tooltip>
                </Typography>
                <Typography variant="h5" component="div">
                  Raymond L. Provost
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Staff Sergeant
                </Typography>
                <Typography variant="body2">
                  <b>from:</b>
                  <br />
                  Texas
                </Typography>
              </Item>
            </Grid>
            <Grid xs={6}>
              <Item className="paper">
                <MilitaryTechIcon color="#222" fontSize="large" />
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  <Tooltip
                    title="The B-17 waist gunner was considered a flexible gunner, and he required a fine sense of timing and familiarity with the rudiments of exterior ballistics, and solid knowledge of the coverage area for all B-17 gun positions."
                    arrow
                  >
                    <Button>Waist Gunner</Button>
                  </Tooltip>
                </Typography>
                <Typography variant="h5" component="div">
                  Daniel J. Fabritz
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Sergeant
                </Typography>
                <Typography variant="body2">
                  <b>from:</b>
                  <br />
                  Pennsylvania
                </Typography>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </div>
      <div class="resources">
        <Typography variant="body2">
          These resources were utilized in the development of this content:
          <br />
          <a href="http://www.303rdbg.com/crew-duties.html" target="_blank">
            Duties and Responsibilities of the B-17 Crewmen
          </a>
          <br />
          <a href="https://95thbgdb.com/" target="_blank">
            The 95th Bomb Group (H) Searchable Database
          </a>
        </Typography>
      </div>
    </>
  );
};

export default Crew;
