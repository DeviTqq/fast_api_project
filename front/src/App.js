import {Routes, Route} from 'react-router-dom'

import {LoginPage} from "./pages/LoginPage"
import {RegisterPage} from "./pages/RegisterPage"
import {HomePage} from "./pages/HomePage"
import { References } from 'pages/form-pages/References';
import { Process } from 'pages/form-pages/Process';
import { Outcomes } from 'pages/form-pages/Outcomes';
import { Formal } from 'pages/form-pages/Formal';
import { Equipment } from 'pages/form-pages/Equipment';
import { Electronics } from 'pages/departments/Electronics';
import { WorkProgramm } from 'pages/WorkProgramm';





function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />}/>
      <Route path='/login' element = {<LoginPage />}/>
      <Route path='/register' element = {<RegisterPage />}/>
      <Route path="/electronics" element={<Electronics/>} />
      <Route path="/equipment" element={<Equipment/>} />
      <Route path="/formal" element={<Formal />} />
      <Route path="/outcomes" element={<Outcomes/>} />
      <Route path="/process" element={<Process/>} />
      <Route path="/references" element={<References />} />
      <Route path="/workProgramm" element={<WorkProgramm />} />

    </Routes>
  );
}

export default App;
