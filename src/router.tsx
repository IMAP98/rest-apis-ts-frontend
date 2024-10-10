import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./layouts/Layout";
import { loader as productsLoader, Products } from "./views/Products";
import { action as newProductAction, NewProduct } from "./views/NewProduct";
import {
    loader as editProductLoader,
    action as editProductAction,
    EditProduct,
} from "./views/EditProduct";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Products />,
                loader: productsLoader,
            },
            {
                path: "products/new",
                element: <NewProduct />,
                action: newProductAction,
            },
            {
                path: "products/:id/edit",
                element: <EditProduct />,
                loader: editProductLoader,
                action: editProductAction,
            },
        ],
    },
]);
