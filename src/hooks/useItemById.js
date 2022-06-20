import { useEffect, useState } from 'react';

export const useItemById = (id, items) => {

    const [state, setState] = useState({});

    useEffect(() => {
        const prod = items.find(item => item.id.toString() === id);
        setState(prod);
    }, [id, items]);

    return state;
}