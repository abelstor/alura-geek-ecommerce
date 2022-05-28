import searchIcon from '../assets/icons/search-icon.png';

export const SearchBar = () => {

    return (
        <div className="searchbar">
            <input
                type="text"
                placeholder="¿Que deseas buscar?"
                className="searchbar__input"
            />
            <button className="searchbar__icon pointer">
                <img className="navbar__search-icon" src={searchIcon} alt="search" />
            </button>
        </div>
    )
}
