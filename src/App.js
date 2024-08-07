import About from "./Components/About";
import React, { useState } from 'react';
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alert from './Components/Alert';
import {
  BrowserRouter, Routes, Route
} from 'react-router-dom';


export default function App() {
  const [mode, setMode] = useState("light");
  const [txt, setTxt] = useState("dark");
  const [alert, setAlert] = useState(null);
  function showAlert(message, type) {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000)
  }
  function toggleMode() {
    if (mode === "light") {
      setMode("dark");
      setTxt("light");
      document.body.style.backgroundColor = "#042743";
      document.body.style.color = "white";
      showAlert("Dark mode has been enabled", "success");
    }
    else {
      setMode("light");
      setTxt("dark");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light mode has been enabled", "success");
    }
  }
  return (
    <>
      <BrowserRouter>
        <Navbar title="Text-Utils" aboutText="About" mode={mode} toggleMode={toggleMode} txt={txt} />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route path="/" element={<TextForm heading="Enter the Text to Analyze Below" mode={mode} showAlert={showAlert} />}></Route>
            <Route path="/about" element={<About/>}></Route>
          </Routes>
          
        </div>
      </BrowserRouter>
    </>
  );
}