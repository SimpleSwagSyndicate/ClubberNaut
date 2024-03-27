import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup"
import { createTheme, MantineProvider, rem } from '@mantine/core';

const theme = createTheme({

});
function App() {
  return (
    <MantineProvider>
    <Router>
      <div className="App">
        <Routes>
          <Route exact="true" path="/" element={<Login  />}>
          </Route>
          <Route exact="true" path="/" element={<Signup />}>
          </Route>
        </Routes>
      </div>
    </Router>
    </MantineProvider>
      
  );
}

export default App;
