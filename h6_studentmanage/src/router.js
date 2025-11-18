import { createBrowserRouter } from "react-router-dom";
import StudentCrud from "./components/St_crud";
import App from "./App";

const router = createBrowserRouter([
    { path: '', element: <App/> },
    { path: '/StudentCrud', element: <StudentCrud/> },
]);

export default router;