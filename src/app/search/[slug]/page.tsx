import { getProducts } from "@/api/fetchProducts";
import { getSearchResults } from "@/api/fetchSearchResults";
import Link from "next/link";
import { Key } from "react";

export default async function SearchPage({
    params,
}: {
    params: { slug: string };
}) {
    const data = await getSearchResults(params.slug);

    return (
        <main className="container mx-auto pt-8 ">
            <h5 className="text-center text-4xl font-semibold pb-4">
                Arama Sonuçları
            </h5>
            <div className="flex flex-wrap ">
                {data.Result.ProductList.map((item: any, key: Key) => (
                    <div
                        key={key}
                        className="w-1/2 sm:w-1/4 lg:w-1/3 xl:w-1/4  flex justify-center hover:text-neutral transition-all duration-300 hover:scale-105"
                    >
                        <div className=" mb-8">
                            <Link
                                href={`/product/${item.ID}`}
                                className=""
                            >
                                <div className="card card-compact w-44 sm:w-36 md:w-44 lg:w-72 2xl:w-80 max-h-[600px] bg-base-100 shadow-xl ">
                                    <figure className="overflow-hidden block flex-shrink-0 pt-2 ">
                                        <img
                                            src={
                                                item.FirstProductImageURL ===
                                                    null ||
                                                item.FirstProductImageURL.trim()
                                                    .length === 0
                                                    ? "/logo/Vestel-V.jpg"
                                                    : item.FirstProductImageURL
                                            }
                                            className=" height: 100%; width: 100%; object-fit: cover"
                                            alt={item.Code}
                                        />
                                    </figure>

                                    <div className="card-body">
                                        <h2 className="card-title text-nowrap overflow-hidden text-xs font-bold sm:font-semibold sm:text-sm lg:text-xl">
                                            {item.DisplayName}
                                        </h2>

                                        <div className="card-actions justify-between place-items-center">
                                            <h3 className="[&:not(:hover)]:text-secondary flex text-xs font-bold sm:font-normal sm:text-sm lg:text-xl">
                                                {item.StrikeThroughPriceToShowOnScreen.toLocaleString()}
                                                TL
                                            </h3>
                                            <div className="card-actions justify-end">
                                                <button className=" btn-xs lg:btn-sm 2xl:btn-md btn-outline btn-secondary btn  text-xs font-bold sm:font-semibold sm:text-xs 2xl:text-md ">
                                                    <span className="lg:hidden">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            strokeWidth={1}
                                                            stroke="currentColor"
                                                            className="w-4 h-4"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                                                            />
                                                        </svg>
                                                    </span>
                                                    <span className="hidden lg:block">
                                                        İncele
                                                    </span>
                                                </button>
                                                <button className=" btn-xs lg:btn-sm 2xl:btn-md btn-outline btn-primary btn text-xs font-bold sm:font-semibold sm:text-xs 2xl:text-md">
                                                    <span className=" lg:hidden">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            strokeWidth={1}
                                                            stroke="currentColor"
                                                            className="w-4 h-4"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                                                            />
                                                        </svg>
                                                    </span>
                                                    <span className="hidden lg:block">
                                                        Sepete Ekle
                                                    </span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}
