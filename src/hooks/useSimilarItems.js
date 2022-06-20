import { useEffect, useState } from 'react';

export const useSimilarItems = (item, items) => {

    const [state, setState] = useState([]);

    useEffect(() => {

        const similarItems = items.filter(product => product.category === item.category);
        similarItems.splice(similarItems.indexOf(item), 1);
        setState(similarItems);

    }, [item, items])

    return state;
}