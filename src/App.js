import "./App.css";
import React, { useState } from 'react';
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); // whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = () => { 
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#13173a';
      showAlert("Dark mode enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode enabled", "success");
    }

  };
  return (
    <>
      <Router>
        {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          
          {/* <TextForm showAlert={showAlert} heading="Enter your text below" mode={mode} /> */}
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />}> </Route>
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter your text below" mode={mode} />}> </Route>
          </Routes>

        </div>
      </Router>
    </>
  );
}

export default App;