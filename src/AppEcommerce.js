import { BrowserRouter as Router } from 'react-router-dom';
import { AppRouter } from './router/AppRouter';

import './styles/styles.scss';

export const AppEcommerce = () => {

    return (
        <Router>
            <AppRouter />
        </Router>
    )
}

/*
<Router basename={process.env.PUBLIC_URL}>
            <AppRouter />
        </Router>


        "homepage": "https://abelstor.github.io/ecommerce",
*/