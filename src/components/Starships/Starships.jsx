import React, { useEffect, useState } from "react";
import st from "./Starships.module.css";
import swapiModule from "../../services/swapi";
import { BackBtn } from "../Back/BackBtn";

const Starships = (props) => {
  const [starships, setStarships] = useState({});
  const [isLoading, setIsLoadng] = useState(true);
  const [page, setPage] = useState(1);
  const [hasNext, setHasNext] = useState(false);
  const [hasPrev, setHasPrev] = useState(false);

  const changePage = (val) => {
    setPage(page + val);
  };

  const fetchStarships = () => {
    swapiModule.getStarships({ page: page }, function (data) {
      setStarships(data);
      setHasNext(data.next != null);
      setHasPrev(data.previous != null);
      setIsLoadng(false);
    });
  };

  useEffect(() => {
    fetchStarships();
  }, [page]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={st.wrap}>
      <BackBtn />
      <h1 className={st.title}>All Starships in Star Wars</h1>
      <div className={st.content}>
        <div className={st.table_header}>
          <p>Starship Name</p>
          <p>Starship Model</p>
          <p>Manufacturer</p>
          <p>Length</p>
          <p>Max Speed</p>
          <p>Crew</p>
          <p>Passengers</p>
        </div>

        {starships.results.map((starship) => (
          <div className={st.planet}>
            <div>{starship.name}</div>
            <div>{starship.model}</div>
            <div>{starship.manufacturer}</div>

            <div>
              {parseInt(starship.length)
                ? new Intl.NumberFormat().format(parseInt(starship.length))
                : starship.length}
            </div>
            <div>{starship.max_atmosphering_speed}</div>
            <div>{starship.crew}</div>
            <div>
            {parseInt(starship.passengers)
                ? new Intl.NumberFormat().format(parseInt(starship.passengers))
                : starship.passengers}
                </div>
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

export default Starships;
