import { starWarsList, consolesList, diversosList } from '../helpers/itemsList';

import { ProductItem } from '../components/ProductItem';
import { HeaderItem } from '../components/HeaderItem';

export const MainScreen = () => {

    const starWars = 'Star Wars';
    const consoles = 'Consolas';
    const various = 'Diversos';

    return (
        <div className="mainscreen">
            <div className="container">
                <HeaderItem title={starWars} />
                <div className="mainscreen__items">
                    {starWarsList.map((item) => (
                        <ProductItem
                            key={item.id}
                            {...item}
                        />
                    ))}
                </div>
                <HeaderItem title={consoles} />
                <div className="mainscreen__items">
                    {consolesList.map((item) => (
                        <ProductItem
                            key={item.id}
                            {...item}
                        />
                    ))}
                </div>
                <HeaderItem title={various} />
                <div className="mainscreen__items">
                    {diversosList.map((item) => (
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
