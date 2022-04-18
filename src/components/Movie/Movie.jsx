import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import st from './Movie.module.css';
import { BASE_URL} from './../../constants'

const Movie = (props) => {
  const [movie, setMovie] = useState({});
  let { id } = useParams();
  const url = `api/films/${id}`;

  const fetchMovie = async () => {
    const apiCall = await fetch(`${BASE_URL}/${url}`);
    const movie = await apiCall.json();
    setMovie(movie);
  }
  console.log(movie)

  useEffect(()=> {
    fetchMovie();
  }, [id]
  )

  return (
    <div className={st.movie_item}>
      <h1> {id} + 'test' </h1>
      <h1>{movie.title}</h1>
      <p>{movie.director}</p>
    </div>
  );
};
export default Movie;