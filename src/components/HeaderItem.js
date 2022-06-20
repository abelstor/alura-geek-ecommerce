import { Link } from 'react-router-dom';
import arrow from '../assets/icons/arrow.png';

export const HeaderItem = ({ title }) => {

    return (
        <div className="headeritem">
            <h3 className="headeritem__title">{title}</h3>
            <div className="headeritem__header">
                <Link to="/products">
                    <p className="headeritem__header-text pointer"> Ver todo</p>
                </Link>
                <img className="headeritem__header-arrow" src={arrow} alt="arrow" />
            </div>
        </div>
    )
}
