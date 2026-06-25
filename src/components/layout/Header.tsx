import Link from 'next/link';
import {Search, ShoppingCart, UserRound,} from 'lucide-react';

export default function Header() {
    return (
        <header className="bg-white border-b">
            <div className="mx-auto flex h-20 max-w-[1320px] items-center justify-between px-4">

                {/* Logo */}
                <Link
                    href="/"
                    className="text-3xl font-bold text-red-600"
                >
                    CARDINAR
                </Link>

                {/* Search */}
                <div className="flex items-center gap-2">
                    <input
                        type="text"
                        placeholder="Поиск"
                        className="h-11 w-[350px] rounded border px-4 outline-none"
                    />

                    <button
                        className=" flex h-11 items-center gap-2 rounded bg-black px-4 text-white "
                    >
                        Search

                        <Search size={18}/>
                    </button>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-6">
                    <ShoppingCart
                        className="cursor-pointer"
                        size={22}
                    />

                    <UserRound
                        className="cursor-pointer text-red-600"
                        size={22}
                    />

                    <select
                        className=" rounded border px-3 py-2 outline-none"
                    >
                        <option>Русский</option>
                        <option>English</option>
                        <option>Uzbek</option>
                    </select>
                </div>

            </div>
        </header>
    );
}