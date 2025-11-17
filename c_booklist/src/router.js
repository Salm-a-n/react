import { createBrowserRouter } from "react-router-dom";
import Booklist from "./components/Booklist";
import App from "./App";

const router = createBrowserRouter([
    { path: '', element: <App/> },
    { path: 'Booklist', element: <Booklist/> },
]);

export default router;