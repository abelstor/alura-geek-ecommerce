import { BrowserRouter as Router } from 'react-router-dom';
import { AppRouter } from './router/AppRouter';

export const AppEcommerce = () => {

    return (
        <Router basename={process.env.PUBLIC_URL}>
            <AppRouter />
        </Router>
    )
}
