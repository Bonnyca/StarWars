import React from "react";
import { NavLink } from "react-router-dom";
import { BASE_URL } from "../../constants";
import st from "./MovieList.module.css";

const convertDate = (date) => {
  /* for UI needs */
  let d = new Date(date);
  let options = { year: "numeric", month: "long", day: "numeric" };
  return d.toLocaleString("us-US", options);
};

class MovieList extends React.Component {
  /* Class component fetches data on ComponentDidMount() and renders it. 
  TO-DO: split on Higher-Order Component and displey components and reuse in sidebar.*/
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
        (res) =>
          this.setState({
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
  }
}
export default MovieList;
