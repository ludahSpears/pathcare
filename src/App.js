import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <p>Marumo</p>
      <a href="/pathcare/test.pdf" target="_blank">file name</a>
      <br />
      <Link to="/pathcare/test.pdf" target="_blank">Test File</Link>
    </div>
  );
}

export default App;
