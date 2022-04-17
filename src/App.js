import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Movie from "./components/MovieList/Movie/Movie";
import Landing from './components/Landing/Landing';

function App() {
  return (
    <BrowserRouter>
      <div className="app_wrapper">
        <Routes>
          <Route path="/movies/:id" element= {<Movie/>}/>
          <Route path="/" element={<Landing/>}/>
 
      </Routes>

    </div>
    </BrowserRouter>

  );
}

export default App;
