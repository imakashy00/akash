
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './output.css'
import Navbar from "./Components/Navbar.tsx";
import Intro from "./Components/Intro.tsx";
import Skills from "./Components/Skills.tsx";
import Projects from "./Components/Projects.tsx";
import Blogs from "./Components/Blogs.tsx";

function App() {

  return (
    <div className="bg-[#202025] w-1.0 h-dvh">

        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Intro/>}/>
                <Route path='/skills'  element={<Skills/>}/>
                <Route path='/projects'  element={<Projects/>}/>
                <Route path='/blogs'  element={<Blogs/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
