
export const ModelMainScreen = ({ id, name, image, description, price }) => {

    return (
        <div className="modelmainscreen">
            <div className="modelmainscreen__item">
                <img className="modelmainscreen__item-image" src={image} alt={name} />
                <p className="modelmainscreen__item-name">{name}</p>
                <p className="modelmainscreen__item-price">{price}</p>
                <p className="modelmainscreen__item-text">Ver Producto</p>
            </div>
        </div>
    )
}
