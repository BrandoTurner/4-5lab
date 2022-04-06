import React, {createContext} from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import FrontPage from "./FrontPage";
import BackPage from "./BackPage";
import './App.css';

export const Context = createContext('dark')
 function App() {
  return (
    <Context.Provider value={'light'}>
      <BrowserRouter>
      <Routes>
        <Route path="/FrontPage" element={<FrontPage/>}/>
        <Route path="/BackPage" element={<BackPage/>}/>
      </Routes>
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
