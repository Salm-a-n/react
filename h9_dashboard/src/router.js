import { createBrowserRouter } from "react-router-dom";
import App from "./App";

// your chosen folders
import RegisterPage from './auth/RegisterPage';
import LoginPage from './auth/LoginPage';
import ProductListPage from './blog/ProductListPage';
import ViewProductPage from './blog/ViewProductPage';

const router = createBrowserRouter([
    { path: '', element: <App/> },
    { path:"/register", element:<RegisterPage/>},
    { path:"/login", element:<LoginPage />},
    { path:"/products", element:<ProductListPage />},
    { path:"/product/:id", element:<ViewProductPage />},
]);

export default router;