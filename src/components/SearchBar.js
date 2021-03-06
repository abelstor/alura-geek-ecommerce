import { useState } from 'react';

import searchIcon from '../assets/icons/search-icon.png';
import { MySearch } from './MySearch';

export const SearchBar = ({ handleBar }) => {

    const [search, setSearch] = useState('');

    const handleChange = (e) => {
        setSearch(e.target.value);
    }

    const hiddenSearch = () => {
        setSearch('');
        handleBar(false);
    }

    return (
        <div className="searchbar">
            <input
                type="text"
                value={search}
                onChange={handleChange}
                placeholder="¿Que deseas buscar?"
                className="searchbar__input"
            />
            {search.length > 0 && <MySearch hiddenSearch={hiddenSearch} search={search} />}
            <button className="searchbar__icon pointer">
                <img className="navbar__search-icon" src={searchIcon} alt="search" />
            </button>
        </div>
    )
}
