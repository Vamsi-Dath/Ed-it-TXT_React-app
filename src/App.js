import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import Progressbar from './components/Progressbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

// const name = 'Vamsi Dath';
function App() {
  const [alert,setAlert] = useState(null);
  const setMsg = (type, msg)=>{
    setAlert({
      type:type,
      content:msg
    });
    setTimeout(()=>{setAlert(null)},1500);
  }
  const [styleProg, setStyle] = useState({
    width:"0%"
  });
  const setProg =(value)=>{
    setStyle({
        width:`${value}%`
    })
  }
  return (
    <>
    <Router>
    <Navbar additional_item="Vamsi_I"/>
    <Routes>
      <Route path="/Ed-it-TXT_React-app/" element={<>
        <Alert alert={alert} />
        <Progressbar styleProg={styleProg}/>
        <TextForm setMsg={setMsg} setProg={setProg}/>
        </>
      }/>
      <Route path="/Ed-it-TXT_React-app/about" element={<About />}/>
      <Route path="/Ed-it-TXT_React-app/services" element={<div className='container'><h1>Welcome to Ed-it TXT</h1><hr/><h3>. the Text Editor and Utils site.<br/>. We provide one stop solution for your text utils needs.</h3></div>}/>
      <Route path="/Ed-it-TXT_React-app/*" element={<h2 className='container'>Page Under Construction . . . <hr/><h6>Try visiting again after sometime.</h6></h2>}/>
    </Routes>
    {/* <div className="blank"> */}
      {/* Hello {name}! */}
    {/* </div> */}

    </Router>
    </>
  );
}

export default App;
