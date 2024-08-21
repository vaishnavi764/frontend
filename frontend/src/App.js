//import logo from './logo.svg';
import './App.css';
// import { Personal } from './components/personal/personal/personal';
// import { Education } from './components/personal/education/education';
// import { Sample, Skills } from './components/personal/skills/skills';
// import { Events } from './components/personal/events/events';
// import { UseStateFunction } from './components/personal/usestate/usestate';

// src/App.js
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignUp } from './signup';
import { SignIn } from './components/signin/signin';
import { Pro } from './components/project/pro';
import { Hydration } from './components/project/hydration';
import NutritionistPage from './components/project/logo';
// import { NutritionCalculator } from './components/project/macronutrient';
import { ForgetPassword } from './components/forgot password/Forgot';
// import Spo from './components/project/spo';
// import HomePage from './components/project/home';
import Recipes from './components/project/recipes';
import NutritionCalculator from './components/project/macronutrient';
import HomePage from './components/project/home';


function App() {
  return (
    <BrowserRouter>
    
      <Routes>
      <Route path='/logo' element={<NutritionistPage />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/home' element={<HomePage/>} />
        <Route path='/nutrition' element={<NutritionCalculator />} />
<Route path='/hydration' element={<Hydration />} />
<Route path='/pro' element={<Pro />} />

        <Route path='/forgot' element={<ForgetPassword />} />
        {/* <Route path='/spo' element={<Spo />} /> */}
        {/* <Route path='/home' element={<HomePage />} /> */}
        <Route path='/recipes' element={<Recipes/>} /> {/* Ensure correct path */}
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
