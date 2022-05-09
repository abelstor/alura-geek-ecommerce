import { starWarsList } from '../../helpers/itemsList';
import { consolesList } from '../../helpers/itemsList';
import { diversosList } from '../../helpers/itemsList';
import { ModelMainScreen } from '../models/ModelMainScreen';
import { ModelHeaderScreen } from '../models/ModelHeaderScreen';

export const MainScreen = () => {

    const starWars = 'Star Wars';
    const consoles = 'Consolas';
    const various = 'Diversos';

    return (
        <div className="mainscreen">
            <div className="container">
                <ModelHeaderScreen title={starWars} />
                <div className="mainscreen__items">
                    {starWarsList.map((item) => (
                        <ModelMainScreen
                            key={item.id}
                            {...item}
                        />
                    ))}
                </div>
                <ModelHeaderScreen title={consoles} />
                <div className="mainscreen__items">
                    {consolesList.map((item) => (
                        <ModelMainScreen
                            key={item.id}
                            {...item}
                        />
                    ))}
                </div>
                <ModelHeaderScreen title={various} />
                <div className="mainscreen__items">
                    {diversosList.map((item) => (
                        <ModelMainScreen
                            key={item.id}
                            {...item}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
