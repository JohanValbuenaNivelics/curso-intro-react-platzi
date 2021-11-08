import React from 'react';
import './TodoSearch.css';
import {TodoContext} from '../TodoContext';
function TodoSearch() {

  const { searchValue, setSearchValue } =  React.useContext(TodoContext);

  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };

  return <input className="TodoSearch" placeholder="Busqueda de Todos" onChange={onSearchValueChange} value={searchValue} />;
}

export { TodoSearch };