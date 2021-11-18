
import React, { useState } from "react";
import './Nav.css'

 function SearchBar({onSearch, clearAll}) {
  const [city, setCity] = useState("");

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
      setCity(" ");
    }}>
      <input
        id="input"
        type="text"
        placeholder="Busca una ciudad"
        value={city}
        onChange={e => setCity(e.target.value)}
        autoComplete="off"
      />
      <input className="boton" type="submit" value="Agregar" />
      <button className="boton_danger" id="btnn" type="reset" onClick={clearAll}>Eliminar todo</button>
    </form>
  );
}

export default SearchBar;