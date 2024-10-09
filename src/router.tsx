import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./layouts/Layout";
import { Products } from "./views/Products";
import { action as newProductAction, NewProduct } from "./layouts/NewProduct";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Products />,
            },
            {
                path: "products/new",
                element: <NewProduct />,
                action: newProductAction,
            },
        ],
    },
]);
