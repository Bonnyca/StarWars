import { useParams } from "react-router-dom";


const Movie = (props) => {
  let { id } = useParams();

  return (

      <h1> {id} </h1>
  );
};
export default Movie;
