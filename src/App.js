import logo from './logo.svg';
import './App.css';
import Button from './components/Button/Button';
import Scan from './containers/Scan';
import Write from './containers/Write';

function App() {
  return (
    <div className="App">
      <Button name="Scan"/>
      <Button name="Write"/>
      <Scan/>
      <Write/>
    </div>
  );
}

export default App;
