import CrudApp from "./components/CrudApp";
import CrudApi from "./components/CrudApi";
import React, { useState } from 'react';

function App() {
 
 
  return (
    <>
     <h1>Ejercicios con React</h1>
     <CrudApi />
     <CrudApp></CrudApp>
     
    </>
  );
}

export default App;
