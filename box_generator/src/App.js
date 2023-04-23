import './App.css';
import React, {useState} from 'react' 
import ColorBoxes from './components/ColorBoxes';
import ColorForm from './components/ColorForm'


function App() {
  //since we don't use database yet, this is a way to temporarily store data submitted in an empty array using the onSubmit event
  const [allBoxObj, setAllBoxObj] = useState([]);
  //lifted from child ColorForm.jsx


  return (
    <div className="App">
      {/* pass allBoxObj and setAllBoxObj to our ColorForm.jsx and ColorBoxes.jsx */}
      <ColorForm allBoxObj={allBoxObj} setAllBoxObj={setAllBoxObj}/>
      <ColorBoxes allBoxObj={allBoxObj} setAllBoxObj={setAllBoxObj}/>
    </div>
  );
}

export default App;
