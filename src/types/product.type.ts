export interface ProductImage {
    id: number;
    image: string;
    position: number;
}

export interface ProductCategory {
    id: number;
    title: string;
}

export interface Product {
    id: number;
    title: string;
    price: string;
    description: string;
    isPremium: boolean;

    images: ProductImage[];

    category: ProductCategory;
}