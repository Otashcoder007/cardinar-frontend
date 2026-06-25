import {api} from '@/lib/axios';
import {CategoriesResponse} from "@/types/category.types";

class CategoryService {
    async getAll(): Promise<CategoriesResponse> {
        const response = await api.get('/categories');

        return response.data;
    }
}

export const categoryService =
    new CategoryService();