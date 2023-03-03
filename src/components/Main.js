import "./Main.css";
import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Intro from "./Intro";
import Joe from "./Joe";
import Table from "./Table";
import Crew from "./Crew";
import Legacy from "./Legacy";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import EmailIcon from "@mui/icons-material/Email";
import Facebook from "@mui/icons-material/Facebook";
import Button from "@mui/material/Button";
import "ag-grid-community/styles//ag-grid.css";
import "ag-grid-community/styles//ag-theme-alpine.css";

const Main = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div className="tabs">
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              centered
            >
              <Tab label="Introduction" {...a11yProps(0)} />
              <Tab label="The Crew" {...a11yProps(1)} />
              <Tab label="Joe's Story" {...a11yProps(2)} />
              <Tab label="The Missions" {...a11yProps(3)} />
              <Tab label="The Legacy" {...a11yProps(4)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <Intro />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Crew />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Joe />
          </TabPanel>
          <TabPanel value={value} index={3}>
            <Table />
          </TabPanel>
          <TabPanel value={value} index={4}>
            <Legacy />
          </TabPanel>
        </Box>
      </div>
      <div className="contact">
        <Button
          variant="outlined"
          color="inherit"
          href="https://paypal.me/kblankenstein"
          target="_blank"
          disableElevation
          startIcon={<AttachMoneyIcon />}
        >
          Donate
        </Button>
        <Button
          variant="outlined"
          color="inherit"
          href="mailto:kimberly.blankenstein@gmail.com"
          disableElevation
          startIcon={<EmailIcon />}
        >
          Email
        </Button>
        <Button
          variant="outlined"
          color="inherit"
          href="https://www.facebook.com/littlejoenoyes"
          target={"_blank"}
          disableElevation
          startIcon={<Facebook />}
        >
          Facebook
        </Button>
      </div>
      <div className="copyright">
        <Typography variant="body2">
          <b>
            Copyright &copy; {new Date().getFullYear()}, Kimberly A.
            Blankenstein, All Rights Reserved
          </b>
        </Typography>
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

export default Main;
