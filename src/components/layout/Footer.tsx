import Link from "next/link";

const Footer = () => {
    return (
        <footer className="mt-20 bg-[#171717] text-white">
            <div className="mx-auto max-w-330 px-4 py-12">

                <div className="grid grid-cols-4 gap-8">

                    <div>
                        <h3 className="mb-4 text-2xl font-bold">
                            CARDINAR
                        </h3>

                        <p className="text-sm text-gray-400">
                            Авточехлы и аксессуары
                            для автомобилей.
                        </p>
                    </div>

                    <div>
                        <h4 className="mb-4 font-semibold">
                            Навигация
                        </h4>

                        <ul className="space-y-2">
                            <li>
                                <Link href="/">
                                    Главная
                                </Link>
                            </li>

                            <li>
                                <Link href="/catalog">
                                    Каталог
                                </Link>
                            </li>

                            <li>
                                <Link href="/constructor">
                                    Конструктор
                                </Link>
                            </li>

                            <li>
                                <Link href="/contacts">
                                    Контакты
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="mb-4 font-semibold">
                            Контакты
                        </h4>

                        <ul className="space-y-2">
                            <li>+998 90 123 45 67</li>
                            <li>info@cardinar.uz</li>
                            <li>Ташкент, Узбекистан</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="mb-4 font-semibold">
                            Социальные сети
                        </h4>

                        <ul className="space-y-2">
                            <li>Telegram</li>
                            <li>Instagram</li>
                            <li>Facebook</li>
                        </ul>
                    </div>

                </div>

                <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
                    © 2026 Cardinar. All rights reserved.
                </div>

            </div>
        </footer>
    );
}

export default Footer;