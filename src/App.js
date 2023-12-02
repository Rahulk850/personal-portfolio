import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes , Route } from "react-router-dom";
import { Practice } from './Components/Practice';
import { Sidebar } from './Components/Sidebar/Sidebar';
import { About } from './Components/About/About';
import { Card } from './Components/Sidebar/Skills/Card';
import { Projects } from './Components/Sidebar/Skills/Projects';
import { Contact } from './Components/Contact/Contact';
import { Ssidebar } from './Components/Sidebar/SmallSidbar/Ssidebar';
import { Skillscard } from './Components/Skillss/Skillscard';
import { Skill } from './Components/Skillss/Skill';


function App() {
  return (
    <div className="container">
     <BrowserRouter>
      <Sidebar/>
      <Ssidebar/>
     <Routes>
      <Route path="/" element={<Practice/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/skills" element={<Skill/>}/>
      <Route path="/projects" element={<Projects/>}/>
      <Route path="/contact" element={<Contact/>}/>
         
      
     </Routes>
     </BrowserRouter>

    </div>
  );
}

export default App;
