'use client';

import {useQuery} from '@tanstack/react-query';
import {productService} from '@/services/product.service';

export function useProduct(id: number) {
    return useQuery({
        queryKey: ['product', id],
        queryFn: () => productService.getOne(id),
        enabled: !!id,
    });
}