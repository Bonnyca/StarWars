import "./Landing.css";
const Landing = () => {
  return (
    <div className="landing">
      <header>
        <h1>May the Force be with you.</h1>
        <p className="credentials">Photo by María Ten, Unsplash</p>
      </header>

      <div className="movie-wrapper">
        <div className="movie-list">
          <div className="movie">
            <h2> Movie 1</h2>
            <p> Slogan1</p>
          </div>
          <div className="movie">
            <h2> Movie 1</h2>
            <p> Slogan1</p>
          </div>
          <div className="movie">
            <h2> Movie 1</h2>
            <p> Slogan1</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Landing;
