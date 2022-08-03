import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchAsyncMovies, fetchAsyncShows, } from "../../features/movies/movieSlice";
import { Link } from 'react-router-dom';
import sithembiso from '../../images/Sithembiso.jpeg';
// import PageNotFound from '../../images/PageNotFound.jpeg';
import "./Header.scss";

const Header = () => {
  const [term, setTerm] = useState("");
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(fetchAsyncMovies(term));
    dispatch(fetchAsyncShows(term));
    setTerm("");
    
    if (term === "") return alert("Please enter search term!");
    dispatch(fetchAsyncMovies(term));
    dispatch(fetchAsyncShows(term));
    setTerm("");
  };

  return (
    <div className="header">
      <div className="logo">
        <Link to="/">Movie App</Link>
      </div>

      <div className="search-bar">
        <form onSubmit={submitHandler}>
          <input
            type="text"
            value={term}
            placeholder="Search Movies or Shows"
            onChange={(e) => setTerm(e.target.value)}
          />

          <button type="submit">
            <i className="fa fa-search"></i>
          </button>
          
        </form>
      </div>
      <div className="user-image">
        <img src={sithembiso} alt="sithembiso" />
      </div>
      {/* <div className="user-image">
        <img src={PageNotFound} alt="PageNotFound" />
      </div> */}
    </div>
  );
};

export default Header;