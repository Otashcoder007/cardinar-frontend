'use client';

import {useQuery} from '@tanstack/react-query';

import {bannerService} from '@/services/banner.service';

export function useBanners() {
    return useQuery({
        queryKey: ['banners'],
        queryFn: bannerService.getAll,
    });
}