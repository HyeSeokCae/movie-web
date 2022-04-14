import React from "react";
import {Link} from "react-router-dom";
import {gql} from "apollo-boost";
import {useQuery} from "@apollo/client";
import "./phase1.css";
function AntMan2() {
  const GET_MOVIES = gql`
    {
      searchMovie(query: "Ant-Man") {
        movies {
          id
          original_title
          poster_path
          overview
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
          data.searchMovie.movies &&
          data.searchMovie.movies.slice(1, 2).map((m) => (
            <div className="card" key={m.id} id={m.id}>
              <img src={IMG_URL + m.poster_path} />
              <Link to={`/movie/detail/${m.id}`} className="aText">
                {m.original_title}
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}

export default AntMan2;
