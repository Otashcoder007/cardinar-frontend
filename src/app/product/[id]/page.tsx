'use client';

import {useParams} from 'next/navigation';

import {useProduct} from '@/hooks/use-product';

import Image from 'next/image';

export default function ProductDetailPage() {
    const params = useParams();

    const id = Number(params.id);

    const {
        data,
        isLoading,
    } = useProduct(id);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    const product = data?.product;

    if (!product) {
        return <p>Product not found</p>;
    }

    const image =
        product.images?.[0]?.image;

    const imageUrl =
        `${process.env.NEXT_PUBLIC_API_URL}/uploads/products/${image}`;

    return (
        <>


            <main className="mx-auto max-w-330 p-6">

                <div className="grid grid-cols-2 gap-12">

                    <div className="relative h-150 overflow-hidden rounded-xl border">
                        {image && (
                            <Image
                                src={imageUrl}
                                alt={product.title}
                                fill
                                unoptimized
                                className="w-auto h-auto p-4"
                            />
                        )}
                    </div>

                    <div>

                        {product.isPremium && (
                            <span
                                className=" mb-4 inline-block rounded-full bg-red-600 px-4 py-2 text-white"
                            >
                                Premium
                            </span>
                        )}

                        <h1 className="mb-4 text-5xl font-bold">
                            {product.title}
                        </h1>

                        <p className="mb-6 text-gray-500">
                            {product.category?.title}
                        </p>

                        <p className="mb-8 text-4xl font-bold text-red-600">
                            {product.price}
                        </p>

                        <p className="mb-8 text-lg leading-8">
                            {product.description}
                        </p>

                        <button
                            className="rounded-full bg-black px-8 py-4 text-white hover:cursor-pointer"
                        >
                            Заказать
                        </button>

                    </div>

                </div>

            </main>
        </>
    );
}
