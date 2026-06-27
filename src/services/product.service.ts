import {api} from '@/lib/axios';

export const productService = {
    async getAll(params?: {
        page?: number;
        limit?: number;
        search?: string;
        categoryId?: number;
        premium?: boolean;
        colorId?: number;
    }) {
        const response = await api.get(
            '/products',
            {
                params,
            },
        );

        return response.data;
    },

    async getOne(id: number) {
        const response = await api.get(
            `/products/${id}`,
        );

        return response.data;
    },
};