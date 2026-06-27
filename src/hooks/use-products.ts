'use client';

import {useQuery} from '@tanstack/react-query';
import {productService} from "@/services/product.service";

export function useProducts(
    page: number, categoryId?: number, search?: string, premium?: boolean, colorId?: number,
) {
    return useQuery({
        queryKey: [
            'products',
            page,
            categoryId,
            search,
            premium,
            colorId
        ],

        queryFn: () =>
            productService.getAll({
                page,
                categoryId,
                search,
                premium,
                colorId
            }),
    });
}