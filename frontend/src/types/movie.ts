import { Category } from "./category";

export type Movie = {
        id: number;
        name: string;
        description: string;
        price: number;
        imgUrl: string
        date: string;
        categories: Category[];            
}