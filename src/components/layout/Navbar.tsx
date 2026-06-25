import Link from 'next/link';

const links = [
    {
        title: 'Каталог',
        href: '/catalog',
    },
    {
        title: 'Конструктор',
        href: '/constructor',
    },
    {
        title: 'Где купить?',
        href: '/contacts',
    },
    {
        title: 'Контакты',
        href: '/contacts',
    },
];

export default function Navbar() {
    return (
        <nav className="bg-[#171717]">
            <div className="mx-auto max-w-330 px-4">
                <ul className="flex h-14 items-center justify-center gap-12">
                    {links.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                className=" text-sm text-white transition hover:text-red-500 "
                            >
                                {link.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}