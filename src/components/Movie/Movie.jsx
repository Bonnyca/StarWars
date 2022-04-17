import { useParams } from "react-router-dom";
import st from './Movie.module.css';


const Movie = (props) => {
  let { id } = useParams();

  return (
      <div className={st.movie_item}>
        <h1> {id} </h1>
      </div>
  );
};
export default Movie;
