import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import swapiModule from "../../services/swapi";
import st from "./MovieList.module.css";

const convertDate = (date) => {
  /* Displays date in local US format. */
  let d = new Date(date);
  let options = { year: "numeric", month: "long", day: "numeric" };
  return d.toLocaleString("us-US", options);
};

const MovieList = () => {
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
      {movies.map((movie) => (
        <div key={movie.episode_id} className={st.item}>
          <NavLink
            to={`/movies/${movie.url.replace(/\/$/, "").split("/").pop()}`}
          >
            <p className={st.date}>{convertDate(movie.release_date)}</p>
            <p className={st.title}>{movie.title}</p>
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
