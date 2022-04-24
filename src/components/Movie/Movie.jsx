import React, { useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import st from "./Movie.module.css";
import NavMovies from "../NavMovies/NavMovies";
import { BASE_URL } from "./../../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJedi,
  faAngleRight,
  faVideoCamera,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGalacticRepublic,
  faGalacticSenate,
} from "@fortawesome/free-brands-svg-icons";
import { BackBtn } from "../Back/BackBtn";

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
      
      <div className={st.list}>
        <span>All Movies </span>
        <FontAwesomeIcon icon={faVideoCamera} fade />
        <NavMovies />
      </div>
      <div className={st.content}>
      <BackBtn />
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
            <p className={st.stat_item_title}>Species</p>
            <div>
              <p className={st.count}>{movie.species.length}</p>
              <span> in this episode</span>
              <NavLink to={"/species"}>
              <div className={st.stat_item_to_all}>
                <div>
                  All Species <FontAwesomeIcon icon={faAngleRight} />{" "}
                </div>
              </div>
            </NavLink>
            </div>
          </div>
          <div className={st.stat_item}>
            <FontAwesomeIcon icon={faGalacticSenate} size="5x" />

            <p className={st.stat_item_title}>Starships</p>
            <p className={st.count}>{movie.starships.length}</p>
            <span> in this episode</span>
            <NavLink to={"/starships"}>
              <div className={st.stat_item_to_all}>
                <div>
                  All Starships <FontAwesomeIcon icon={faAngleRight} />{" "}
                </div>
              </div>
            </NavLink>
          </div>
          <div className={st.stat_item}>
            <FontAwesomeIcon icon={faGalacticRepublic} size="5x" />
            <p className={st.stat_item_title}>Planets</p>
            <p className={st.count}>{movie.planets.length}</p>
            <span> in this episode</span>{" "}
            <NavLink to={"/planets"}>
              <div className={st.stat_item_to_all}>
                <div>
                  All Planets <FontAwesomeIcon icon={faAngleRight} />{" "}
                </div>
              </div>
            </NavLink>
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
