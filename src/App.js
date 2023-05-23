import './App.css';
import Navbar from './components/Navbar';
const name = 'Vamsi Dath';
function App() {
  return (
    <>
    <Navbar additional_item="Vamsi_I"/>
    <div className="blank">
      Hello {name}!
    </div>
    </>
  );
}

export default App;
