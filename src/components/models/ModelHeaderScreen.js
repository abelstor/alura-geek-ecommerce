import arrow from '../../assets/icons/arrow.png';

export const ModelHeaderScreen = ({ title }) => {
    return (
        <div className="modelheaderscreen__header">
            <h3 className="modelheaderscreen__header-title">{title}</h3>
            <div className="modelheaderscreen__header-content">
                <p className="modelheaderscreen__header-text"> Ver todo</p>
                <img className="modelheaderscreen__header-arrow" src={arrow} alt="arrow" />
            </div>
        </div>
    )
}
