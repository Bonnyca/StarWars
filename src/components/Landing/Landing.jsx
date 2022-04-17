import st from "./Landing.module.css";
// import Sword from "./Sword/Sword";
import { NavLink } from "react-router-dom";
import MovieList from "../MovieList/MovieList";

const Landing = () => {
  return (
    <div className={st.landing}>
      <header>
        <h1>May the Force be with you.</h1>
        <p className={st.credentials}>Photo by María Ten, Unsplash</p>
      </header>

      <div className={st.movie_wrapper}>
          <MovieList/>
      </div>
    </div>
  );
};
export default Landing;
