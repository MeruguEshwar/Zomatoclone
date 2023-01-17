import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Compponents/Header';
import Reegister from './Compponents/Reegister';
import Dasshboard from './Compponents/Dashboard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header/>}></Route>
          <Route path="/dashboard" element={<Dasshboard/>}></Route>
          <Route path="/register" element={<Reegister/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
