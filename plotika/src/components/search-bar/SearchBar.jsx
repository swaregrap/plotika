import React from "react";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <>
      <form action="/">
        <input
          type="text"
          className="search-bar"
          id="barra-busqueda"
          placeholder="Busca tu diseño"
        />
      </form>
    </>
  );
};

export default SearchBar;
