import Clicks from './componentes/clicks';
import Comp1 from './componentes/comp1';
import Comp2 from './componentes/comp2';
import * as React from 'react';
import {
  Routes,
  Route
} from 'react-router-dom';

function App() {
  return (
    <div>
          <Routes>
            <Route path='/Home' index='true' element={<Comp2/>}  key={1} /> 
            <Route path='/Clicks'  element={<Clicks/>}  key={2} /> 
            <Route path='/wolverine' element={<Comp1 id='1009718' key={3} />}/> 
            <Route path='/hulk' element={<Comp1 id='1009351' key={4}/>}  /> 
            <Route path='/C.America' element={<Comp1 id='1009220' key={5}/>}  /> 
            <Route path='/Thanos' element={<Comp1 id='1009652' key={6}/>}  /> 
            <Route path='/Thor' element={<Comp1 id='1009664' key={7}/>}  /> 
            <Route path='/Vision' element={<Comp1 id='1009697' key={8}  />}  /> 
          </Routes>
          
    </div>
  );
  
}


export default App;
