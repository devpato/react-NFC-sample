import nfc from './nfc.svg';
import './App.css';
import Scan from './containers/Scan';
import Write from './containers/Write';
import { useState } from 'react';
import { ActionsContext } from './contexts/context';

function App() {

  const [actions, setActions] = useState(null);
  const {scan, write} = actions || {};

  const actionsValue = {actions,setActions};

  const onHandleAction = (actions) =>{
    setActions({...actions});
  }

  return (
      <div className="App">
        <img src={nfc} className="App-logo" alt="logo" />
        <h1>NFC Tool</h1>
        <div className="App-container">
          <button onClick={()=>onHandleAction({scan: 'scanning', write: null})} className="btn">Scan</button>
          <button onClick={()=>onHandleAction({scan: null, write: 'writing'})} className="btn">Write</button>
        </div>
        <ActionsContext.Provider value={actionsValue}>
          {scan && <Scan/>}
          {write && <Write/>}
        </ActionsContext.Provider>
      </div>
  );
}

export default App;
