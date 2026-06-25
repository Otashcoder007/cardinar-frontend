'use client';
import {useQuery} from '@tanstack/react-query';
import {categoryService} from '@/services/category.service';
import {CategoriesResponse} from "@/types/category.types";

export function useCategories() {
    return useQuery<CategoriesResponse>({
        queryKey: ['categories'],
        queryFn: () =>
            categoryService.getAll(),
    });
}