
export const ProductEditItem = ({ id, image, name, price }) => {

    return (
        <div className="productedititem">
            <img className="productedititem__image" src={image} alt={name} />
            <div className="productedititem__card">
                <div className="productedititem__item">
                    <p className="productedititem__item-name">{name}</p>
                    <p className="productedititem__item-price">
                        <small>$</small>
                        <strong>{price}</strong>
                    </p>
                </div>
            </div>
            <p className="productedititem__item-text">#{id}</p>
        </div>
    )
}
