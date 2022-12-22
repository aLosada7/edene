import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { ThemeProvider } from '@edene/foundations';

import { Layout } from './components/shared/Layout';
import { theme } from './theme';
import { CartProvider } from './context/cart/cartProvider';
import { HomePage } from './pages/HomePage';
import { RestaurantPage } from './pages/RestaurantPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { CompletedOrderPage } from './pages/CompletedOrderPage';

export function App() {
    return (
        <ThemeProvider theme={theme}>
            <CartProvider>
                <Router>
                    <Routes>
                        <Route path="/" element={<Layout />}>
                            <Route index element={<HomePage />}></Route>
                            <Route
                                path="/:restaurantSlug"
                                element={<RestaurantPage />}
                            />
                            <Route
                                path="/checkout"
                                element={<CheckoutPage />}
                            />
                            <Route
                                path="/order-completed"
                                element={<CompletedOrderPage />}
                            />
                        </Route>
                    </Routes>
                </Router>
            </CartProvider>
        </ThemeProvider>
    );
}

export default App;
