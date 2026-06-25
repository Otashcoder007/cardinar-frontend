import {api} from '@/lib/axios';
import {BannerResponse} from '@/types/banner.type';

export const bannerService = {
    async getAll(): Promise<BannerResponse> {
        const response =
            await api.get<BannerResponse>(
                '/banners',
            );

        return response.data;
    },
};