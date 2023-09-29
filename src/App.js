import Navbar from "./components/navbar/navbar";
import Intro from "./components/intro/intro";
import About from "./components/About/about";
import Portfolio from "./components/portfolio/portfolio";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Projects from "./components/projects/projects";
import Contact from "./components/contact/contact";

function App() {
  return (
<Router>
  <Navbar></Navbar>
<Routes>
  <Route  path="/" element={<Intro />} />
  <Route  path="/about" element={<About/>}/>
  <Route  path="/portfolio" element={<Portfolio/>}/>
  <Route  path="/projects" element={<Projects/>}/>
  <Route path="/contact" element={<Contact/>}/>
</Routes>
</Router>
  );
}

export default App;