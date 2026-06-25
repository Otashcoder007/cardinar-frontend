'use client';

import {useQuery} from '@tanstack/react-query';
import {productService} from "@/services/product.service";

export function useProducts(
    page: number,
    categoryId?: number,
) {
    return useQuery({
        queryKey: [
            'products',
            page,
            categoryId,
        ],

        queryFn: () =>
            productService.getAll({
                page,
                categoryId,
            }),
    });
}