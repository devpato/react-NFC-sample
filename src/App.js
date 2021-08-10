import logo from './logo.svg';
import './App.css';
import Scan from './containers/Scan';
import Write from './containers/Write';
import { useState } from 'react';

function App() {
  const [isScan, setScan] = useState(false);
  const [isWrite, setWrite] = useState(false);

  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <button onClick={()=>setScan(!isScan)} className="">Scan</button>
      <button onClick={()=>setWrite(!isWrite)} className="">Write</button>
      {isScan && <Scan/>}
      {isWrite && <Write/>}
 
    </div>
  );
}

export default App;
