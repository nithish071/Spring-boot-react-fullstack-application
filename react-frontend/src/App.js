import React from 'react';
import logo from './logo.svg';
import './App.css';

import {BrowserRouter,Route,Routes} from 'react-router-dom';
import ListEmployeeComponents from './components/ListEmployeeComponents';
import HeaderComponent from './components/HeaderComponent';
import FooterComponents from './components/FooterComponents';
import CreateEmployeeComponents from './components/CreateEmployeeComponents';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
import ViewEmployee from './components/ViewEmployee';




function App() {
  return (
    <div>
      <BrowserRouter>
        <HeaderComponent />
            <div className="container">
              <Routes>
                <Route path='/' element={<ListEmployeeComponents/>} />
                <Route path='/employees' element={<ListEmployeeComponents/>} />
                <Route path='/add-employee' element = {<CreateEmployeeComponents/>} />
                <Route path='/update-employee/:id' element = {<UpdateEmployeeComponent/>} />
                <Route path='/view-employee/:id' element = {<ViewEmployee/>} />
                
              </Routes> 
            </div>
          <FooterComponents />
       </BrowserRouter  >
    </div>
  );
}

export default App;
