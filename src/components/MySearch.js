import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { geekItems } from '../helpers/geekItems';

export const MySearch = ({ search, hiddenSearch }) => {

    const filteredResult = useMemo(() =>
        geekItems.filter((result) => {
            return result.name.toLowerCase().includes(search.toLowerCase())
        }), [search]);

    return (
        <div className="mysearch">
            <div className="mysearch__content">
                <ul>
                    {filteredResult.map(geek => (
                        <Link key={geek.id} to={`/product/${geek.id}`}>
                            <li
                                className="mysearch__content-result pointer"
                                onClick={hiddenSearch}
                            >
                                {geek.name}
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>
        </div>
    )
}
