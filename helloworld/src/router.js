import { createBrowserRouter } from "react-router-dom";
import Crud from "./components/Crud";
import App from "./App";
import ListPosts from "./components/blog/ListPost";
import CreatePost from "./components/blog/CreatePost";
import ViewPost from "./components/blog/Viewpost";
import EditPost from "./components/blog/EditPost";

const router = createBrowserRouter([
    { path: '', element: <App/> },
    { path: 'crud', element: <Crud/> },
    { path: 'blog/posts/',element: <ListPosts/>},
    { path : 'blog/posts/create' , element : <CreatePost/> },
    { path: 'blog/posts/:postId', element: <ViewPost/>},
    { path : '/blog/posts/:postId/edit', element: <EditPost/>}
]);

export default router;