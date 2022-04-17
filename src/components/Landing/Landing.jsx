import st from "./Landing.module.css";
// import Sword from "./Sword/Sword";
import { NavLink } from "react-router-dom";

const Landing = () => {
  return (
    <div className={st.landing}>
      <header>
        <h1>May the Force be with you.</h1>
        <p className={st.credentials}>Photo by María Ten, Unsplash</p>
      </header>

      <div className={st.movie_wrapper}>
          <NavLink to="/movies/2">movie title2</NavLink>
          <NavLink to="/movies/3">movie title3</NavLink>
          <NavLink to="/movies/1">movie title1</NavLink>
      </div>
    </div>
  );
};
export default Landing;
