import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';
import IconButton from "@mui/material/IconButton";
import Home from '@mui/icons-material/Home';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import EmailIcon from '@mui/icons-material/Email';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>The Joe Noyes Crew</h1>
        <h4>Ten notable USAAF airmen who were lost in 1943.</h4>
      </header>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="primary">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <Home />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Home
            </Typography>
            <Button variant="outlined" color="inherit" href="" disableElevation startIcon={<AttachMoneyIcon />}>Donate</Button>
            <Button variant="outlined" color="inherit" href="mailto:kimberly.blankenstein@gmail.com" disableElevation startIcon={<EmailIcon />}>Contact</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}

export default App;
