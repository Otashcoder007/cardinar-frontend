export interface Banner {
    id: number;
    title: string;
    image: string;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
    deletedAt: string | null;
}

export interface BannerResponse {
    message: string;
    banners: Banner[];
}