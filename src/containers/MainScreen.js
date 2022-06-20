import { geekItems } from '../helpers/geekItems';

import { ProductItem } from '../components/ProductItem';
import { HeaderItem } from '../components/HeaderItem';

export const MainScreen = () => {

    const items = (category) => {
        return geekItems.filter(item => item.category.includes(category));
    }

    const starWarsTitle = 'Star Wars';
    const consolesTitle = 'Consolas';
    const variousTitle = 'Diversos';

    return (
        <div className="mainscreen">
            <div className="container">
                <HeaderItem title={starWarsTitle} />
                <div className="mainscreen__items">
                    {items('starWars').map((item) => (
                        <ProductItem
                            key={item.id}
                            {...item}
                        />
                    ))}
                </div>
                <HeaderItem title={consolesTitle} />
                <div className="mainscreen__items">
                    {items('consoles').map((item) => (
                        <ProductItem
                            key={item.id}
                            {...item}
                        />
                    ))}
                </div>
                <HeaderItem title={variousTitle} />
                <div className="mainscreen__items">
                    {items('various').map((item) => (
                        <ProductItem
                            key={item.id}
                            {...item}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
