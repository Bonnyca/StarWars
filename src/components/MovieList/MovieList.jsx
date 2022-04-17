import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import st from "./MovieList.module.css";
import { BASE_URL } from "../../constants";

const convertDate =(date) => {
  let d = new Date(date)
  console.log(d)
  let options = { year: 'numeric', month: 'long', day: 'numeric' };
  return d.toLocaleString('us-US',options);
}


class MovieList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoaded:false,
      movies: []
    };
  }
  
  componentDidMount() {
    const url = "api/films"
    fetch(`${BASE_URL}/${url}`)
      .then((res) => res.json())
      .then(
        (res) => this.setState({
          isLoaded:true,
          movies: res.results,
        }),
        (error) => {
          console.log(error);
        }
      );
  }


  render() {
    const { movies } = this.state;
    return (
      <div className={st.movie_list}>
      {movies.map((movie) => (
        <div  key={movie.episode_id} className={st.item}>
          <NavLink key={movie.episode_id} to={`/movies/${movie.episode_id}`}>
            <p>{movie.title}</p>
            <span>{convertDate(movie.release_date)}</span>

          </NavLink>
        </div>
      ))}
    </div>
    )
  }
}

// const MovieList = (props) => {
//   const [movies, setMovies] = useState([]);
//   const url = "api/films";
//   // Similar to componentDidMount and componentDidUpdate:
//   useEffect(() => {
//     fetch(`${BASE_URL}/${url}`)
//       .then((res) => res.json())
//       .then(
//         (res) => setMovies(res.results),
//         (error) => {
//           console.log(error);
//         }
//       );
//   }, [movies]);

//   const convertDate =(date) => {
//     let d = new Date(date)
//     console.log(d)
//     let options = { year: 'numeric', month: 'long', day: 'numeric' };
//     return d.toLocaleString('us-US',options);
//   }

//   return (
//     <div className={st.movie_list}>
//       {movies.map((movie) => (
//         <div  key={movie.episode_id} className={st.item}>
//           <NavLink key={movie.episode_id} to={`/movies/${movie.episode_id}`}>
//             <p>{movie.title}</p>
//             <span>{convertDate(movie.release_date)}</span>

//           </NavLink>
//         </div>
//       ))}
//     </div>
//   );
// };
export default MovieList;
