import React from 'react';
import logo from './logo.svg';
import './App.css';
import  {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import AddEmployeeComponent from './components/AddEmployeeComponent';


function App() {
  return (
    <div>
      <Router>
      <HeaderComponent />
      <div className="container">
        <Routes>
            <Route path="/" Component={ListEmployeeComponent}></Route>
            <Route path="/employees" Component={ListEmployeeComponent}></Route>
            <Route path="/add-employee" Component={AddEmployeeComponent}></Route>
            <Route path="/edit-employee/:id" Component={AddEmployeeComponent}></Route>
        </Routes>
      
      </div>
      
      <FooterComponent />
      </Router>
      
    </div>
  );
}

export default App;
