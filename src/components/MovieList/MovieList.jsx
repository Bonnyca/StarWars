import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import st from "./MovieList.module.css";
import { BASE_URL } from "../../constants";

const MovieList = (props) => {
  const [movies, setMovies] = useState([]);
  const url = "api/films";
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    fetch(`${BASE_URL}/${url}`)
      .then((res) => res.json())
      .then(
        (res) => setMovies(res.results),
        (error) => {
          console.log(error);
        }
      );
  }, []);

  return (
    <div className={st.movie_list}>
      {movies.map((movie) => (
        <NavLink key={movie.episode_id} to={`/movies/${movie.episode_id}`}>
          {movie.title}
        </NavLink>
      ))}
    </div>
  );
};
export default MovieList;
