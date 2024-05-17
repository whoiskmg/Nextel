import Link from "next/link";
import { Key } from "react";

const Categories = ({ data }: any) => {
    return (
        <div className="container mx-auto pt-8">
            <h5 className="text-center text-4xl font-semibold pb-4">
                Kategoriler
            </h5>
            <div className="flex flex-wrap ">
                {data.Result.TreeList.map(
                    (item: any, key: Key) =>
                        item.DisplayOrder > 0 && (
                            <div
                                key={key}
                                className="w-1/2 sm:w-1/3 lg:w-1/2 xl:w-1/3 flex justify-center hover:text-neutral transition-all duration-300 hover:scale-105"
                            >
                                <div className=" mb-8">
                                    <Link
                                        href={`/category/${item.ID}`}
                                        className=""
                                    >
                                        <div className="card w-44 sm:w-48 md:w-56 lg:w-96 bg-base-100 shadow-xl">
                                            <figure>
                                                <img
                                                    src={
                                                        item.ImageUri ===
                                                            null ||
                                                        item.ImageUri.trim()
                                                            .length === 0
                                                            ? "/logo/Vestel-V.jpg"
                                                            : item.ImageUri
                                                    }
                                                    className="pt-2 "
                                                    alt={item.Code}
                                                />
                                            </figure>

                                            <div className="card-body">
                                                <h2 className="card-title justify-center text-xs font-bold sm:font-semibold sm:text-sm lg:text-xl">
                                                    {item.DisplayName}
                                                </h2>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        )
                )}
            </div>
        </div>
    );
};

export default Categories;
