import { Routes, Route } from 'react-router-dom';
import { Home } from '../components/screens/Home';
import { Navbar } from '../components/screens/Navbar';

import '../styles/styles.scss';

export const AppRouter = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </>
    )
}