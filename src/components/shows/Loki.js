import React from "react";
import {Link} from "react-router-dom";
import {gql} from "apollo-boost";
import {useQuery} from "@apollo/client";
import "../movies/phase1.css";

function Loki() {
  const GET_MOVIES = gql`
    {
      searchShow(query: "Loki") {
        shows {
          id
          original_name
          overview
          poster_path
        }
      }
    }
  `;
  const {loading, error, data} = useQuery(GET_MOVIES);
  const IMG_URL = "http://image.tmdb.org/t/p/w500";

  return (
    <div className="linkBox">
      <div className="link">
        {!loading &&
          data.searchShow.shows &&
          data.searchShow.shows.slice(0, 1).map((s) => (
            <div className="card" key={s.id} id={s.id}>
              <img src={IMG_URL + s.poster_path} />
              <Link to={`/show/detail/${s.id}`} className="aText">
                {s.original_name}
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Loki;
