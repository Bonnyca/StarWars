import React, { useEffect, useState } from "react";
import st from "./Species.module.css";
import swapiModule from "../../services/swapi";
import { BackBtn } from "../Back/BackBtn";

const Species = (props) => {
  const [species, setSpecies] = useState({});
  const [isLoading, setIsLoadng] = useState(true);
  const [page, setPage] = useState(1);
  const [hasNext, setHasNext] = useState(false);
  const [hasPrev, setHasPrev] = useState(false);

  const changePage = (val) => {
    setPage(page + val);
  };

  const fetchSpecies = () => {
    swapiModule.getAllSpecies({page:page}, function (data) {
      setSpecies(data);
      console.log(data)
      setHasNext(data.next != null);
      setHasPrev(data.previous != null);
      setIsLoadng(false);
    });
  };

  useEffect(() => {
    fetchSpecies();
  }, [page]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={st.wrap}>
      <BackBtn />
      <h1 className={st.title}>All Species in Star Wars</h1>
      <div className={st.content}>
        <div className={st.table_header}>
          <p>Species</p>
          <p>Classification</p>
          <p>Designation</p>
          <p>Average Height</p>
          <p>Average Lifespan</p>
          <p>Language</p>
        </div>

        {species.results.map((sp) => (
          <div className={st.planet}>
            <div>{sp.name}</div>
            <div>{sp.classification}</div>
            <div>{sp.designation}</div>
            <div>{sp.average_height}</div>
            <div>{sp.average_lifespan}</div>
            <div>{sp.language}</div>
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

export default Species;
