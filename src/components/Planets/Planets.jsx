import React, { useEffect, useState } from "react";
// import { BASE_URL } from "../../constants";
import st from "./Planets.module.css";
import swapiModule from "../../services/swapi";

const Planets = (props) => {
  const [planets, setPlanets] = useState({});
  const [isLoading, setIsLoadng] = useState(true);
  const [page, setPage] = useState(1);
  const [hasNext, setHasNext] = useState(false);
  const [hasPrev, setHasPrev] = useState(false);

  const changePage = (val) => {
    console.log("this is:", val, page + val);
    setPage(page + val);
  };

  const fetchPlanets = () => {
    swapiModule.getPlanets({ page: page }, function (data) {
      setPlanets(data);
      setHasNext(data.next != null);
      setHasPrev(data.previous != null);
    });

    setIsLoadng(false);
  };
  useEffect(() => {
    fetchPlanets();
  }, [page]);
  console.log(planets);

  const dencity = (population, diameter) => {
    return (Math.PI * parseInt(diameter)) / parseInt(population);
  };
  // console.log(planets)
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={st.wrap}>
      <h1 className={st.title}>All Planets in Star Wars</h1>
      <div className={st.list}>
      {hasPrev &&
    <button onClick={() => changePage(-1)}> Previous Page</button>
  }
      {hasNext &&
    <button onClick={() => changePage(1)}> Next Page</button>
  }
      </div>
    </div>
  );
};

export default Planets;
