import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import st from "./NavMovies.module.css";
import { BASE_URL } from "../../constants";



class NavMovies extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      isLoading: true,
    };
  }

  componentDidMount() {  
    const url = "api/films";

    fetch(`${BASE_URL}/${url}`)
      .then((res) => res.json())
      .then(
        (res) => this.setState({
            movies: res.results,
            isLoading: false,
          }),
        (error) => {
          console.log(error);
        }
      );
  }

  render() {
    const { movies, isLoading } = this.state;
    if (isLoading) {
      return <div>Loading...</div>;
    }

    return (
      <div className={st.movie_list}>
        {movies.map((movie) => (
          <div key={movie.episode_id} className={st.item}>
            <NavLink to={`/movies/${movie.episode_id}`}>
              <p className={st.title}>{movie.title}</p>
            </NavLink>
          </div>
        ))}
      </div>
    );
  }
}
export default NavMovies;