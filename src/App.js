import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import Progressbar from './components/Progressbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react'

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
    <Navbar additional_item="Vamsi_I"/>
    <Alert alert={alert} />
    {/* <div className="blank"> */}
      {/* Hello {name}! */}
    {/* </div> */}
    <Progressbar styleProg={styleProg}/>
    <TextForm setMsg={setMsg} setProg={setProg}/>
    {/* <About/> */}
    </>
  );
}

export default App;
