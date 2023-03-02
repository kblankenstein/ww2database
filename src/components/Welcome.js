import "./Welcome.css";
import * as React from "react";
import PropTypes from "prop-types";
import Button from '@mui/material/Button';
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Table from "../components/Table";
import "ag-grid-community/styles//ag-grid.css";
import "ag-grid-community/styles//ag-theme-alpine.css";
import { maxWidth } from "@mui/system";

const Welcome = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );

  return (
    <>
      <div id="welcome">
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="Introduction" {...a11yProps(0)} />
              <Tab label="Joe's Story" {...a11yProps(1)} />
              <Tab label="The Crew" {...a11yProps(2)} />
              <Tab label="The Missions" {...a11yProps(3)} />
              <Tab label="The Bomb Group" {...a11yProps(4)} />
              <Tab label="The Legacy" {...a11yProps(5)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <p>
              Welcome! My name is Kimberly Blankenstein, and I work as a Senior
              Software Engineer for Lockheed Martin Space, located in Colorado.
              For over twenty years, I have been independently researching and
              sharing the life story of Flight Officer Joseph H. Noyes, from
              Seattle — a Flying Fortress pilot who served with the 95th Bomb
              Group (H) during the Second World War.
            </p>
            <p>
              As a teenager, I became uniquely fascinated with World War Two,
              and The Mighty Eighth Air Force, and I spent countless hours
              immersed in military history reading material. Then, I stumbled
              across the book B-17s Over Berlin on a shelf at a bookstore and
              noticed a group photograph within its pages, and in that
              photograph, by some destiny, I found Joe Noyes.
            </p>
            <p>
              In answer to a question I get asked frequently, I am not related
              to anyone who served on The Joe Noyes Crew or a veteran of the
              95th Bomb Group (H). I am a volunteer and advocate for the crew
              and their families, and I am grateful for the support of these
              parties over the last 20 years.
            </p>
            <p>
              Nine men from The Joe Noyes Crew remain officially Missing in
              Action today, and I've always felt great sadness for the families
              they left behind in 1943. Years ago, I built a simple website as
              an online memorial to their short but inspiring lives and to share
              their stories with interested parties worldwide. May we never
              forget them and their enduring sacrifice.
            </p>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <p>
              Joseph Herbert Noyes was born to Walter and Frances Noyes on
              August 11th, 1921, in Beach, North Dakota. He had two younger
              brothers, Robert (Bob) and Walter, and they grew up at 410 West
              Lee Street, on Queen Anne Hill in Seattle, Washington.
            </p>
            <p>
              While attending Queen Anne High School, Joe aspired to attend The
              Boeing School of Aeronautics in California. From a young age, he
              knew he wanted to become a pilot, and everyone who knew him was
              acutely aware of his ambitions.
            </p>
            <p>
              As one of the first of his peers to obtain a driver's license, he
              utilized this privilege by delivering food for a local grocer.
              That was his first real job, and he made the best of every minute
              of his employment. Occasionally, he even used this opportunity to
              visit his girlfriend, Donna Davis.
            </p>
            <p>
              Joe Noyes is fondly remembered for being hard-working, dedicated
              to his commitments, and possessing a keen sense of humor.
            </p>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <div id="crewmembers1">
            <Card sx={{ minWidth: 255, maxWidth: 255, margin: 1 }}>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Pilot
                </Typography>
                <Typography variant="h5" component="div">
                  Joseph{bull}H{bull}Noyes
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Flight Officer
                </Typography>
                <Typography variant="body2">
                  <b>from:</b>
                  <br />
                  {'Seattle, Washington'}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
            <Card sx={{ minWidth: 255, maxWidth: 255, margin: 1 }}>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Co-Pilot
                </Typography>
                <Typography variant="h5" component="div">
                  David{bull}F{bull}Prees
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  2nd Lieutenant
                </Typography>
                <Typography variant="body2">
                <b>from:</b>
                  <br />
                  {'Milwaukee, Wisconsin'}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
            <Card sx={{ minWidth: 255, maxWidth: 255, margin: 1 }}>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Navigator
                </Typography>
                <Typography variant="h5" component="div">
                  Frank{bull}A{bull}Roth
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  2nd Lieutenant
                </Typography>
                <Typography variant="body2">
                <b>from:</b>
                  <br />
                  {'Union City, New Jersey'}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
            </div>
            <div id="crewmembers2">
            <Card sx={{ minWidth: 255, maxWidth: 255, margin: 1 }}>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Bombardier
                </Typography>
                <Typography variant="h5" component="div">
                  Rex{bull}A{bull}Rice
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  2nd Lieutenant
                </Typography>
                <Typography variant="body2">
                <b>from:</b>
                  <br />
                  {'Anderson, South Carolina'}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
            <Card sx={{ minWidth: 255, maxWidth: 255, margin: 1 }}>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                   Top Turret &amp; Engineer
                </Typography>
                <Typography variant="h5" component="div">
                  William{bull}E{bull}Clapper
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Technical Sergeant
                </Typography>
                <Typography variant="body2">
                <b>from:</b>
                  <br />
                  {'Cowley County, Kansas'}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
            <Card sx={{ minWidth: 255, maxWidth: 255, margin: 1 }}>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                   Radio Operator
                </Typography>
                <Typography variant="h5" component="div">
                  Edgar{bull}A{bull}Lajoie
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Technical Sergeant
                </Typography>
                <Typography variant="body2">
                <b>from:</b>
                  <br />
                  {'Providence, Rhode Island'}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
            <Card sx={{ minWidth: 255, maxWidth: 255, margin: 1 }}>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                   Waist Gunner
                </Typography>
                <Typography variant="h5" component="div">
                William{bull}L{bull}Cochran
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Staff Sergeant
                </Typography>
                <Typography variant="body2">
                <b>from:</b>
                  <br />
                  {'Texas'}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
            </div>
            <div id="crewmembers3">
            <Card sx={{ minWidth: 255, maxWidth: 255, margin: 1 }}>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                   Ball Turret
                </Typography>
                <Typography variant="h5" component="div">
                Robert{bull}H{bull}Willis
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Staff Sergeant
                </Typography>
                <Typography variant="body2">
                <b>from:</b>
                  <br />
                  {'North Carolina'}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
            <Card sx={{ minWidth: 255, maxWidth: 255, margin: 1 }}>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                   Tail Gunner
                </Typography>
                <Typography variant="h5" component="div">
                Raymond{bull}L{bull}Provost
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Staff Sergeant
                </Typography>
                <Typography variant="body2">
                <b>from:</b>
                  <br />
                  {'Texas'}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
            <Card sx={{ minWidth: 255, maxWidth: 255, margin: 1 }}>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                   Waist Gunner
                </Typography>
                <Typography variant="h5" component="div">
                Daniel{bull}J{bull}Fabritz
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Sergeant
                </Typography>
                <Typography variant="body2">
                <b>from:</b>
                  <br />
                  {'Pennsylvania'}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
            </div>
          </TabPanel>
          <TabPanel value={value} index={3}>
            <Table />
          </TabPanel>
          <TabPanel value={value} index={4}>
            Item Four
          </TabPanel>
          <TabPanel value={value} index={5}>
            Item Five
          </TabPanel>
        </Box>
      </div>
    </>
  );
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default Welcome;
