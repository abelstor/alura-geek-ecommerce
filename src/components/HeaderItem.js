import arrow from '../assets/icons/arrow.png';

export const HeaderItem = ({ title }) => {

    return (
        <div className="headeritem">
            <h3 className="headeritem__title">{title}</h3>
            <div className="headeritem__header">
                <p className="headeritem__header-text"> Ver todo</p>
                <img className="headeritem__header-arrow" src={arrow} alt="arrow" />
            </div>
        </div>
    )
}
