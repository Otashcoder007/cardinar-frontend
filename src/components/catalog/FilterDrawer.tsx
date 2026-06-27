'use client';
import {useState} from 'react';
import {useCategories} from "@/hooks/use-categories";
import {Category} from "@/types/category.types";
import {useColors} from '@/hooks/use-colors';
import {Color} from '@/types/color.types';

interface Props {
    categoryId?: number;
    setCategoryId: (value: number | undefined) => void;
    search: string;
    setSearch: (value: string) => void;
    premium: boolean;
    setPremium: (value: boolean) => void;
    colorId?: number;
    setColorId: (value: number | undefined) => void;
}

const FilterDrawer = ({
                          categoryId, setCategoryId,
                          search, setSearch,
                          premium, setPremium,
                          colorId, setColorId,
                      }: Props) => {
    const [isOpen, setIsOpen] = useState(false);
    const {data} = useCategories();
    const {data: colorData} = useColors();

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className=" fixed left-0 top-1/3 z-50 h-14 w-14 rounded-r-xl bg-white shadow-lg"
            >
                Logo
            </button>

            {isOpen && (
                <div
                    onClick={() => setIsOpen(false)}
                    className="fixed inset-0 z-40 bg-black/20"
                />
            )}

            <div
                className={`fixed left-0 top-1/3 rounded-2xl z-50 h-screen bg-white shadow-xl transition-all duration-300 overflow-hidden ${isOpen ? 'w-[320px]' : 'w-0'}`}
            >
                <div className="p-6">
                    <button
                        onClick={() => setIsOpen(false)}
                        className="mb-6"
                    >
                        ✕
                    </button>

                    <div className="space-y-6 p-6">
                        <h2 className="text-2xl font-bold text-red-600">
                            CARDINAR
                        </h2>

                        <div>
                            <label className="mb-2 block text-sm">
                                Category
                            </label>

                            <select
                                className=" w-full rounded border p-3"
                                value={categoryId}
                                onChange={(e) =>
                                    setCategoryId(
                                        e.target.value
                                            ? Number(e.target.value)
                                            : undefined,
                                    )
                                }
                            >
                                <option value="">
                                    All Categories
                                </option>

                                {data?.categories?.map(
                                    (category: Category) => (
                                        <option
                                            key={category.id}
                                            value={category.id}
                                        >
                                            {category.title}
                                        </option>
                                    ),
                                )}
                            </select>
                        </div>

                        <div>
                            <label className="mb-2 block text-sm">
                                Search
                            </label>

                            <input
                                type="text"
                                value={search}
                                onChange={(e) =>
                                    setSearch(e.target.value)
                                }
                                className="w-full rounded border p-2"
                            />
                        </div>
                        <div>
                            <label className="mb-3 block text-sm font-medium">
                                Colors
                            </label>

                            <div className="flex flex-wrap gap-3">
                                {colorData?.colors?.map(
                                    (color: Color) => (
                                        <button
                                            key={color.id}
                                            type="button"
                                            className={`h-8 w-8 rounded-full border-2 transition duration-200 hover:scale-110
                                            ${
                                                colorId === color.id
                                                    ? 'border-black scale-110'
                                                    : 'border-gray-300'
                                            }`}
                                            style={{
                                                backgroundColor: color.color
                                            }}
                                            onClick={() =>
                                                setColorId(color.id)
                                            }
                                            title={color.title}
                                        />
                                    ),
                                )}
                            </div>
                        </div>
                        <div>
                            <label className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    checked={premium}
                                    onChange={(e) =>
                                        setPremium(e.target.checked)
                                    }
                                />
                                Premium only
                            </label>
                        </div>

                        <button
                            className="w-full rounded bg-black py-3 text-white"
                        >
                            Apply Filters
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FilterDrawer;