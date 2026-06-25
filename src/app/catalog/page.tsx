'use client';
import {useState} from 'react';
import ProductCard from '@/components/product/ProductCard';
import {useProducts} from '@/hooks/use-products';
import FilterDrawer from "@/components/catalog/FilterDrawer";

export default function CatalogPage() {
    const [page, setPage] = useState(1);
    const [categoryId, setCategoryId] = useState<number>();
    const {
        data,
        isLoading,
    } = useProducts(
        page,
        categoryId,
    );

    return (
        <main className="mx-auto max-w-330 p-6">

            <FilterDrawer
                categoryId={categoryId}
                setCategoryId={setCategoryId}
            />

            <h1 className="mb-8 text-4xl font-bold">
                Каталог
            </h1>

            <div
                className=" grid grid-cols-4 gap-6"
            >
                {data?.products?.map(
                    (product: any) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                        />
                    ),
                )}
            </div>
            <div className="mt-12 flex justify-center gap-2">
                <button
                    disabled={page === 1}
                    onClick={() =>
                        setPage((prev) => prev - 1)
                    }
                    className="rounded border px-4 py-2"
                >
                    Prev
                </button>

                {Array.from(
                    {
                        length:
                            data?.meta?.totalPages || 1,
                    },
                    (_, i) => (
                        <button
                            key={i}
                            onClick={() =>
                                setPage(i + 1)
                            }
                            className={`rounded border px-4 py-2 ${
                                page === i + 1
                                    ? 'bg-black text-white'
                                    : ''
                            }`}
                        >
                            {i + 1}
                        </button>
                    ),
                )}

                <button
                    disabled={
                        page ===
                        data?.meta?.totalPages
                    }
                    onClick={() =>
                        setPage((prev) => prev + 1)
                    }
                    className="rounded border px-4 py-2"
                >
                    Next
                </button>
            </div>
        </main>
    );
}