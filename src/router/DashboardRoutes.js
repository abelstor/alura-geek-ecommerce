import { Routes, Route } from 'react-router-dom';
import { Footer } from '../containers/Footer';
import { Navbar } from '../containers/Navbar';

import { Home } from '../pages/Home';
import { Products } from '../pages/Products';
import { NotFound } from '../pages/NotFound';
import { ProductDetail } from '../components/ProductDetail';

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </>
    )
}