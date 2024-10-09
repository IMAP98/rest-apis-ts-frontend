import { safeParse } from "valibot";
import { DraftProductSchema } from "../types";

type ProductData = {
    [k: string]: FormDataEntryValue;
}

export const addProduct = async (data: ProductData) => {
    try {
        const result = safeParse(DraftProductSchema, {
            name: data.name,
            price: +data.price
        });
        
        if (result.success) {
            
        } else {
            throw new Error("Invalid data");
        }
        
    } catch (error) {
        console.log(error);
    }
}