//import logo from './logo.svg';
import './App.css';
// import { Personal } from './components/personal/personal/personal';
// import { Education } from './components/personal/education/education';
// import { Sample, Skills } from './components/personal/skills/skills';
// import { Events } from './components/personal/events/events';
// import { UseStateFunction } from './components/personal/usestate/usestate';

import {BrowserRouter,Routes,Route} from "react-router-dom"
import { SignUp } from './signup';
import { SignIn } from './components/signin/signin';
// import { Signup } from './components/signin/signin';




function App() {
  return (
   <> 
   <BrowserRouter>
   <Routes>
  
    
    <Route path='/signup' element={<SignUp/>}/>
     <Route path='/signin' element={<SignIn/>}/> 
    
    
  
   </Routes>
   
   </BrowserRouter>
   
   
   
   </>
  );
}

export default App;
