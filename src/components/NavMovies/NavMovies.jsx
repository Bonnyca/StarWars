import React, { useState, useEffect} from "react";
import { NavLink } from "react-router-dom";
import swapiModule from "../../services/swapi";
import st from "./NavMovies.module.css";



const NavMovies = () => {
  const [movies, setMovies] = useState({});
  const [isLoading, setIsLoadng] = useState(true);


  const fetchMovies = () => {
    /* A func to get a list of the films and set them to the state. */
    swapiModule.getFilms(function (data) {
      setMovies(data.results);
      setIsLoadng(false);
    });
  };

  useEffect(() => {
    fetchMovies();
  }, []);

if (isLoading) {
  return <div>Loading...</div>;
}

    return (
      <div className={st.movie_list}>
        {movies.map((movie, index) => (
          <div key={movie.episode_id} className={st.item}>
            <NavLink to={`/movies/${movie.url.replace(/\/$/, "").split("/").pop()}`}>
              <p className={st.title}>{movie.title}</p>
            </NavLink>
          </div>
        ))}
      </div>
    );
  }

export default NavMovies;