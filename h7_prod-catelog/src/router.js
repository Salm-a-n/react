import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ListProduct from "./components/blog/List";
import CreateProduct from "./components/blog/Create";
import ViewProduct from "./components/blog/View";
import EditProduct from "./components/blog/Edit";

const router = createBrowserRouter([
    { path: '', element: <App/> },
    { path: '/products',element: <ListProduct/>},
    { path : '/products/create' , element : <CreateProduct/> },
    { path: '/products/:productId', element: <ViewProduct/>},
    { path : '/products/:productId', element: <EditProduct/>}
]);

export default router;