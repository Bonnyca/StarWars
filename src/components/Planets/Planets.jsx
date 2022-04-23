import React, { useEffect, useState } from "react";
import st from "./Planets.module.css";
import swapiModule from "../../services/swapi";

const Planets = (props) => {
  const [planets, setPlanets] = useState({});
  const [isLoading, setIsLoadng] = useState(true);
  const [page, setPage] = useState(1);
  const [hasNext, setHasNext] = useState(false);
  const [hasPrev, setHasPrev] = useState(false);

  const changePage = (val) => {
    setPage(page + val);
  };

  const fetchPlanets = () => {
    swapiModule.getPlanets({ page: page }, function (data) {
      setPlanets(data);
      setHasNext(data.next != null);
      setHasPrev(data.previous != null);
      setIsLoadng(false);
    });
  };
  
  useEffect(() => {
    fetchPlanets();
    console.log('planets inside useE',planets)
  }, [page]);

  const dencity = (population, diameter) => {
    return (Math.PI * parseInt(diameter)) / parseInt(population);
  };
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={st.wrap}>
      <h1 className={st.title}>All Planets in Star Wars</h1>
      <div className={st.content}>
        {planets.results.map((planet) => (
          <div className={st.planet}>
            <span>{planet.name}</span>
            <span>{planet.diameter}</span>
            <span>{planet.population}</span>
            <span>{planet.rotation_period}</span>
            <span>{planet.orbital_period}</span>
            <span>{planet.climate}</span>
          </div>
        ))}
      </div>

      <div className={st.btn_wrap}>
        {hasPrev && (
          <button className={st.btn} onClick={() => changePage(-1)}>
            {" "}
            Previous Page
          </button>
        )}
        {hasNext && (
          <button className={st.btn} onClick={() => changePage(1)}>
            {" "}
            Next Page
          </button>
        )}
      </div>
    </div>
  );
};

export default Planets;
