import {
    ActionFunctionArgs,
    Form,
    redirect,
    useFetcher,
    useNavigate,
} from "react-router-dom";
import { formatCurrency } from "../helpers";
import { Product } from "../types";
import { deleteProduct } from "../services/ProductService";

type ProductDetailProps = {
    product: Product;
};

export const action = async ({ params }: ActionFunctionArgs) => {
    if (params.id !== undefined) {
        await deleteProduct(+params.id);
        return redirect("/");
    }
};

export const ProductDetails = ({ product }: ProductDetailProps) => {
    const fetcher = useFetcher();
    const navigate = useNavigate();

    const isAvailable = product.availability;

    return (
        <tr className="border-b ">
            <td className="p-3 text-lg text-gray-800">{product.name}</td>
            <td className="p-3 text-lg text-gray-800">
                {formatCurrency(product.price)}
            </td>
            <td className="p-3 text-lg text-gray-800">
                <fetcher.Form method="POST">
                    <button
                        type="submit"
                        name="id"
                        value={product.id}
                        className={`${
                            isAvailable ? "text-black" : "text-red-600"
                        } rounded-lg p-2 text-xs uppercase font-bold w-full border border-black-100 hover:cursor-pointer`}
                    >
                        {isAvailable ? "Available " : "No available"}
                    </button>
                </fetcher.Form>
            </td>
            <td className="p-3 text-lg text-gray-800 ">
                <div className="flex gap-2 items-center">
                    <button
                        onClick={() => navigate(`products/${product.id}/edit`)}
                        className="bg-indigo-600 text-white rounded-lg w-full p-2 uppercase font-bold text-xs text-center"
                    >
                        Editar
                    </button>
                    <Form
                        className="w-full"
                        method="POST"
                        action={`products/${product.id}/delete`}
                        onSubmit={(event) => {
                            if (!confirm("Delete?")) {
                                event.preventDefault();
                            }
                        }}
                    >
                        <input
                            type="submit"
                            value="Delete"
                            className="bg-red-600 text-white rounded-lg w-full p-2 uppercase font-bold text-xs text-center hover:cursor-pointer"
                        />
                    </Form>
                </div>
            </td>
        </tr>
    );
};
