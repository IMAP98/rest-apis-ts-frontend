import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./layouts/Layout";
import {
    loader as productsLoader,
    Products,
    action as updateAvailabilityAction,
} from "./views/Products";
import { action as newProductAction, NewProduct } from "./views/NewProduct";
import {
    loader as editProductLoader,
    action as editProductAction,
    EditProduct,
} from "./views/EditProduct";
import { action as deleteProductDetails } from "./components/ProductDetails";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Products />,
                loader: productsLoader,
                action: updateAvailabilityAction,
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
            {
                path: "products/:id/delete",
                action: deleteProductDetails,
            },
        ],
    },
]);
