import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import { createTheme, MantineProvider, rem } from '@mantine/core';

const theme = createTheme({

});
function App() {
  return (
    <MantineProvider theme={theme}>
  <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to = "/">Login</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route exact="true" path="/" element={<Login  />}>
          </Route>
        </Routes>
      </div>
      </Router>
    </MantineProvider>
      
  );
}

export default App;
