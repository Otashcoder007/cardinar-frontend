import Image from 'next/image';
import Link from 'next/link';
import {Product} from "@/types/product.type";

interface Props {
    product: Product;
}

const ProductCard = ({product}: Props) => {
    const image = product.images?.[0]?.image;
    const imageUrl =
        `${process.env.NEXT_PUBLIC_API_URL}/uploads/products/${image}`;
    return (
        <Link
            href={`/product/${product.id}`}
            className='overflow-hidden rounded-xl border bg-white transition hover:shadow-lg'
        >
            <div className="relative h-62.5">
                {image && (
                    <Image
                        src={imageUrl}
                        alt={product.title}
                        fill
                        unoptimized
                        className="w-fit h-fit p-4"
                    />
                )}
            </div>

            <div className="p-4">
                <p className="mb-2 text-sm text-gray-500">
                    {product.category.title}
                </p>

                <h3 className="mb-2 text-lg font-semibold">
                    {product.title}
                </h3>

                <p className="mb-4 text-sm text-gray-600">
                    {product.description}
                </p>

                <p className="text-xl font-bold text-red-600">
                    {product.price}
                </p>
            </div>
        </Link>
    )
}

export default ProductCard;