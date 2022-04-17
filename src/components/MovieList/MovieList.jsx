import { NavLink } from 'react-router-dom';
import st from './MovieList.module.css';

const MovieList = (props) => {


  return (
    <div className={st.movie_list}>
        <NavLink to="/movies/2">movie title2</NavLink>
        <NavLink to="/movies/3">movie title3</NavLink>
        <NavLink to="/movies/1">movie title1</NavLink>

    </div>
  );
};
export default MovieList;
