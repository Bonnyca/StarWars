import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Movie from "./components/Movie/Movie";
import Landing from './components/Landing/Landing';

function App() {
  return (
    <BrowserRouter>
      <div className="app_wrapper">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/movies/:id" element={<Movie />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
