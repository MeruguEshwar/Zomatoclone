import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import List from './Components/List';
import Update from './Components/Update';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <button className="btn btn-outline-success me-1" type="submit"><Link to="/login" className='text-decoration-none'>SignIn</Link></button>
                <button className="btn btn-outline-danger" type="submit"><Link to="/register" className='text-decoration-none'>SignUp</Link></button>
              </form>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/register" element={<SignUp />}></Route>
          <Route path="/login" element={<SignIn />}></Route>
          <Route path="/list" element={<List />}></Route>
          <Route path="/update/:productId" element={<Update />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
