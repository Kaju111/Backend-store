import {BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Navber from "./Components/Navber";
import Home from "./Components/Home";
import About from "./Components/About";
import NoteState from "./context/notes/NoteState";

function App() {
  return (
    <NoteState>
    <Router>
        <Navber/>
        <div className="container">
           <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/about' element={<About/>}/>
            </Routes>
            </div>
      </Router>
    </NoteState>
  );
}

export default App;
