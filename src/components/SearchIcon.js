import { SearchBar } from './SearchBar';

import arrowLeft from '../assets/icons/flechita.svg';

export const SearchIcon = ({ searchBar, setSearchBar }) => {

    const handleBar = () => {
        setSearchBar(!searchBar);
    }

    return (
        <div className="searchicon">
            <div className="my-order-container">
                <img
                    onClick={handleBar}
                    src={arrowLeft} alt={arrowLeft} style={{ width: "16px" }} className="pointer" />
                <h1 className="title">Buscar 👀</h1>
            </div>
            <SearchBar handleBar={handleBar} />
        </div>
    )
}
