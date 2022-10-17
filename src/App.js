import Sidebar from "./components/Sidebar";
// import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import Navbar from "./components/Navbar";
// import Add from "./components/Add";
import Screenfeeds from "./components/Screenfeeds";
import ExploreFeed from "./components/ExploreFeed";
import Connectfeed from "./components/Connectfeed";
import ReelsFeed from "./components/ReelsFeed";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Socilapage from "./Screen/Clips/Socilapage"
import Login from "./Account/Login"
import Registration from "./Account/Registration"
import Otppage from "./Account/Otppage"

function App() {
  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (<>

    <Router>
      <Routes>
        <Route path="/" element={
          <ThemeProvider theme={darkTheme}>
            <Box style={{ color: "black" }}>
              <Navbar style={{ color: "#fff" }} />
              <Stack direction="row" spacing={2} justifyContent="space-between">
                <Sidebar setMode={setMode} mode={mode} />
                <Connectfeed />
                <Rightbar />
              </Stack>
            </Box>
          </ThemeProvider>

        } />


        <Route path="/clips" element={
          <ThemeProvider theme={darkTheme}>
            <Box style={{ color: "black" }}>
              <Navbar style={{ color: "#fff" }} />
              <Stack direction="row" spacing={2} justifyContent="space-between">
                <Sidebar setMode={setMode} mode={mode} />
                <Screenfeeds />
              </Stack>
            </Box>
          </ThemeProvider>

        } />

        <Route path="/connect" element={
          <ThemeProvider theme={darkTheme}>
            <Box style={{ color: "black" }}>
              <Navbar style={{ color: "#fff" }} />
              <Stack direction="row" spacing={2} justifyContent="space-between">
                <Sidebar setMode={setMode} mode={mode} />
             
                <ReelsFeed/>
              </Stack>
            </Box>
          </ThemeProvider>

        } />
        <Route path="/explore" element={
          <ThemeProvider theme={darkTheme}>
            <Box style={{ color: "black" }}>
              <Navbar style={{ color: "#fff" }} />
              <Stack direction="row" spacing={2} justifyContent="space-between">
                <Sidebar setMode={setMode} mode={mode} />
               
                <ExploreFeed/>

              </Stack>
              {/* <Add /> */}
            </Box>
          </ThemeProvider>

        } />
        <Route path="/login" element={<Login/>}/>
        <Route path="/registration" element={<Registration/>}/>
        <Route path="/otppage" element={<Otppage/>}/>




      </Routes>
    </Router>
    <Socilapage />

  </>
  );
}

export default App;
