import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ListMedicine from "./components/medicines/listMedicine";
import CreateMedicine from "./components/medicines/createMedicine";
import EditMedicine from "./components/medicines/EditMedicine";
import ViewMedicine from "./components/medicines/ViewMedicine";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";


const router = createBrowserRouter([
    { path: "/", element: <App/> },
    { path: "medicines", element: <ListMedicine /> },
    { path: "medicines/create", element: <CreateMedicine /> },
    { path: "medicines/edit/:id", element: <EditMedicine /> },
    { path: "medicines/view/:id", element: <ViewMedicine /> },
    { path: "register", element: <Register /> },
    { path: "login", element: <Login /> },
]);

export default router;