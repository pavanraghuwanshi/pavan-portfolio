
import Home from "./pages/Home.js"
import { BrowserRouter as Router , Route , Routes  } from "react-router-dom"

import './App.css';
import Header from "./Component/header.js";
import Footer from "./Component/footer.js";
import About from "./pages/about.js";
import Blogs from "./pages/blog.js";
import Project from './pages/Project.js'

export default function App() {
  return (
    <>
        <Router>
        <Header/>
        <Routes>
        <Route path="/" element ={<Home/>}/>
        <Route path="/about" element={<About/>}/> 
        <Route path="/blogs" element={<Blogs/>}/>
        <Route path="/project" element={<Project/>}/>

        </Routes>
        <Footer/>
        </Router>
    </>
   

  )
}

