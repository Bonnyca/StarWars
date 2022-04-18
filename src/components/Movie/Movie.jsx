import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import st from "./Movie.module.css";
import { BASE_URL } from "./../../constants";
import MovieList from "../MovieList/MovieList";

const Movie = (props) => {
  const [movie, setMovie] = useState({});
  let { id } = useParams();
  const url = `api/films/${id}`;
  console.log('mm')
  const fetchMovie = async () => {
    const apiCall = await fetch(`${BASE_URL}/${url}`);
    const movie = await apiCall.json();
    setMovie(movie);
  };

  useEffect(() => {
    fetchMovie();
  }, [id]);

  return (
    <div className={st.movie_item}>
      <div className={st.list}>Movie List</div>
      <div className={st.content}>
        <h1>{movie.title}</h1>
        <div> <span>Episode ID: </span> {movie.episode_id} </div>
        <div> <span>Director: </span> {movie.director} </div>
        <div><span>Producer: </span> {movie.producer} </div>
        <div><span>Release year:  </span> {movie.release_date} </div> 
        {/* TODO slice(0,4) */}
        <div className={st.statistic}>
          <div>Characters</div>
          <div>Starships</div>
          <div>Planet visited</div>
        </div>
      </div>
      <div className={st.crawl}>
        <p> {movie.opening_crawl} </p>
        </div>
    </div>
  );
};
export default Movie;
