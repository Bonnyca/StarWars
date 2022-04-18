import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import st from "./Movie.module.css";
import { BASE_URL } from "./../../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJedi } from "@fortawesome/free-solid-svg-icons";
import {
  faGalacticRepublic,
  faGalacticSenate,
} from "@fortawesome/free-brands-svg-icons";

const Movie = (props) => {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsloading] = useState(true);
  let { id } = useParams();
  const url = `api/films/${id}`;
  const fetchMovie = async () => {
    const apiCall = await fetch(`${BASE_URL}/${url}`);
    const movie = await apiCall.json();
    setMovie(movie);
    setIsloading(false);
  };

  useEffect(() => {
    fetchMovie();
  }, [id]);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className={st.movie_item}>
      <div className={st.list}>Movie List</div>
      {/* TODO Movie list */}
      <div className={st.content}>
        <h1>{movie.title}</h1>
        <div>
          {" "}
          <span>Episode ID: </span> {movie.episode_id}{" "}
        </div>
        <div>
          {" "}
          <span>Director: </span> {movie.director}{" "}
        </div>
        <div>
          <span>Producer: </span> {movie.producer}{" "}
        </div>
        <div>
          <span>Release year: </span> {movie.release_date.slice(0, 4)}{" "}
        </div>
        <div className={st.statistic}>
          <div className={st.stat_item}>
            <FontAwesomeIcon icon={faJedi} size="5x" />
            <p>Characters</p>
          </div>
          <div className={st.stat_item}>
            <FontAwesomeIcon icon={faGalacticSenate} size="5x"/>

            <p>Starships</p>
          </div>
          <div className={st.stat_item}>
            <FontAwesomeIcon icon={faGalacticRepublic} size="5x" />
            <p>Planets</p>
          </div>
        </div>
      </div>
      <div className={st.crawl}>
        <p> {movie.opening_crawl} </p>
      </div>
    </div>
  );
};
export default Movie;
