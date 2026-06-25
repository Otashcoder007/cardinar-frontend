import Hero from "@/components/home/Hero";
import PopularProducts from "@/components/home/PopularProducts";
import PremiumProducts from "@/components/home/PremiumProducts";

export default function HomePage() {
    return (
        <>
            <Hero/>
            <PopularProducts/>
            <PremiumProducts/>
        </>
    );
}