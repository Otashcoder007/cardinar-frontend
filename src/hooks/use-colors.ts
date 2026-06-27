'use client';
import {useQuery} from '@tanstack/react-query';
import {colorService} from '@/services/color.service';
import {ColorsResponse} from '@/types/color.types';

export function useColors() {
    return useQuery<ColorsResponse>({
        queryKey: ['colors'],
        queryFn: () => colorService.getAll(),
    });
}