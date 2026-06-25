'use client';
import 'swiper/css';
import 'swiper/css/navigation';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper/modules';
import {useProducts} from "@/hooks/use-products";
import ProductCard from "@/components/product/ProductCard";
import {Product} from "@/types/product.type";

const PopularProducts = () => {
    const {data, isLoading} =
        useProducts();

    if (isLoading) {
        return <p>Loading...</p>;
    }

    const products =
        data?.products?.slice(0, 4);
    return (
        <>
            <div className="mb-8 flex items-center justify-between">
                <h2 className="text-3xl font-semibold">
                    Популярные товары на сайте
                </h2>

                <div className="flex gap-3">
                    <button
                        id="popular-prev"
                        className=" flex h-12 w-12 items-center justify-center rounded-full border bg-white transition hover:bg-gray-100"
                    >
                        ←
                    </button>

                    <button
                        id="popular-next"
                        className=" flex h-12 w-12 items-center justify-center rounded-full border bg-white transition hover:bg-gray-100"
                    >
                        →
                    </button>
                </div>
            </div>
            <Swiper
                modules={[Navigation]}
                navigation={{
                    prevEl: '#popular-prev',
                    nextEl: '#popular-next',
                }}
                spaceBetween={24}
                slidesPerView={4}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                    1320: {
                        slidesPerView: 4,
                    },
                }}
            >
                {products?.map((product: Product) => (
                    <SwiperSlide key={product.id}>
                        <ProductCard product={product}/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}

export default PopularProducts;
