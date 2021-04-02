import React, { useState, useEffect } from "react";
import CardList from "../CardList/CardList";
import SearchBar from "../SearchBar/SearchBar";
import Header from "../Header/Header";
import StaticCards from "../StaticCards/StaticCards";

const Games = () => {
  const [games, setGames] = useState([]);

  const [searchField, setSearchField] = useState("");

  const fetchData = async () => {
    const apiKey = "8e8b94ef98d6450087c462de886f297c";
    try {
      const response = await fetch(
        `https://api.rawg.io/api/games?search=${searchField}&key=${apiKey}&dates=2015-09-01,2021-01-01&platforms=18,1`
      );
      const parsedResponse = await response.json();
      const data = parsedResponse.results;
      setGames(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(
    (e) => {
      if (e.key === "Enter") {
        fetchData();
      }
    },
    [searchField]
  );

  return (
    <div>
      <Header />
      <StaticCards />
      <SearchBar setSearchField={setSearchField} searchField={searchField} />
      <CardList games={games} />
    </div>
  );
};

export default Games;
