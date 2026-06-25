'use client';
import Image from 'next/image';
import {useBanners} from "@/hooks/use-banners";

export default function Hero() {
    const {data} = useBanners();

    const banner = data?.banners?.[0];

    const imageUrl =
        `${process.env.NEXT_PUBLIC_API_URL}/uploads/banners/${banner?.image}`;
    return (
        <section className="bg-[#f5f5f5]">
            <div className="mx-auto flex max-w-330 items-center justify-between px-4 py-16">

                <div className="max-w-130">
                    <h1 className="mb-6 text-8xl font-bold text-red-600">
                        CARDINAR
                    </h1>

                    <p className="mb-2 text-lg font-semibold uppercase">
                        CARDINAR — САМАЯ КРУПНАЯ КОМПАНИЯ <br/>
                        В УЗБЕКИСТАНЕ ПО ПРОИЗВОДСТВУ <br/>
                        АВТОЧЕХЛОВ
                    </p>

                    <p className="mb-10 text-gray-500">
                        Barcha GM mashinalari uchun
                    </p>

                    <button
                        className=" rounded-full bg-[#2d2d2d] px-8 py-4 text-white transition hover:bg-black "
                    >
                        В магазин
                    </button>
                </div>

                <div>
                    {banner && (
                        <Image
                            src={imageUrl}
                            alt={banner.title}
                            width={550}
                            height={700}
                            unoptimized
                            priority
                        />
                    )}
                </div>

            </div>
        </section>
    );
}