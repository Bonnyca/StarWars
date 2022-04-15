import st from './MovieList.module.css';
import Movie from './Movie/Movie';


const MovieList = () => {
  return (
    <div className={st.movie_list}>
     <Movie/>
     <Movie/>
     <Movie/>
     <Movie/>
     <Movie/>
     <Movie/>
     test
    </div>
  );
};
export default MovieList;
