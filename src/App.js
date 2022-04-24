import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Movie from "./components/Movie/Movie";
import Landing from './components/Landing/Landing';
import Planets from "./components/Planets/Planets";
import Starships from "./components/Starships/Starships";
import Species from "./components/Species/Species";

function App() {
  return (
    <BrowserRouter>
      <div className="app_wrapper">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/movies/:id" element={<Movie />} />
          <Route path="/planets" element = {<Planets />} />
          <Route path="/starships" element = {<Starships />} />
          <Route path="/species" element = {<Species />} />
          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
