import { createBrowserRouter } from "react-router-dom";
import Crud from "./components/Crud";
import App from "./App";

const router = createBrowserRouter([
    { path: '', element: <App/> },
    { path: 'crud', element: <Crud/> },
]);

export default router;