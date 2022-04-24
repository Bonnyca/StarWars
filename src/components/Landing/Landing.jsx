import MovieList from "../MovieList/MovieList";
import st from "./Landing.module.css";

const Landing = () => {
  return (
    <div className={st.landing}>
      <header>
        <h1>May the Force be with you.</h1>
        <p className={st.credentials}>
          Photo by María Ten,{" "}
          <a href="https://unsplash.com/photos/b7Hr2YK-FuI">
            Unsplash
          </a>
        </p>
      </header>

      <div className={st.movie_wrapper}>
        <MovieList />
      </div>
    </div>
  );
};
export default Landing;
