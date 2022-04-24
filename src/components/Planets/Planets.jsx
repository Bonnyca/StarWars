import React, { useEffect, useState } from "react";
import swapiModule from "../../services/swapi";
import { BackBtn } from "../Back/BackBtn";
import st from "./Planets.module.css";

const Planets = (props) => {
  /* TO-DO: refactor to reuse with Species and Starship Components */
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
  }, [page]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={st.wrap}>
      <BackBtn />
      <h1 className={st.title}>All Planets in Star Wars</h1>
      <div className={st.content}>
        <div className={st.table_header}>
          <div>Planet</div>
          <p>Diameter</p>
          <p>Population</p>
          <p>Rotation Period</p>
          <p>Orbital Period</p>
          <p>Planet Climate</p>
        </div>

        {planets.results.map((planet) => (
          <div className={st.planet}>
            <div>{planet.name}</div>
            <div>
              {parseInt(planet.diameter)
                ? new Intl.NumberFormat().format(parseInt(planet.diameter))
                : "unknown"}
            </div>
            <div>
              {parseInt(planet.population)
                ? new Intl.NumberFormat().format(parseInt(planet.population))
                : "unknown"}
            </div>
            <div>{planet.rotation_period}</div>
            <div>{planet.orbital_period}</div>
            <div>{planet.climate}</div>
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
