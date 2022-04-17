import st from './MovieList.module.css';
import Movie from './Movie/Movie';


const MovieList = (props) => {


  return (
    <div className={st.movie_list}>
      <div> Movie title 1 <span>1977</span></div>
      <div> Movie title 2 <span>1988</span></div>

    </div>
  );
};
export default MovieList;
