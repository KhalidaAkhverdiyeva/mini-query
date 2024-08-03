import { createBrowserRouter } from "react-router-dom";
import Layout from "./featured/layout/layout";
import CardPage from "./pages/cardPage";
import ListPage from "./pages/listPage";
import AddBlog from "./pages/addBlog"

export const routers = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <CardPage />,
            },
            {
                path: "TablePage",
                element: <ListPage />,
            },
            {
                path: "/new",
                element: <AddBlog />
            }
        ],
    },
]);