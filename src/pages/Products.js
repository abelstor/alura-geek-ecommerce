import { geekItems } from '../helpers/geekItems';
import { ProductEditItem } from '../components/ProductEditItem';

export const Products = () => {

    return (
        <div className="products">
            <div className="container">
                <div className="products__header">
                    <h1 className="products__header-title">Todos los productos</h1>
                    <button className="products__header-button pointer">
                        Agregar producto
                    </button>
                </div>
                <div className="products__items">
                    {geekItems.map((item) => (
                        <ProductEditItem
                            key={item.id}
                            {...item}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
