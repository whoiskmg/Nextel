"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { Key, useEffect, useState } from "react";
const Navigation = ({ data }: any) => {
    const removeAttributeByClassName = (
        event: React.MouseEvent<HTMLAnchorElement>
    ): void => {
        var elements = document.getElementsByClassName("category");

        for (var i = 0; i < elements.length; i++) {
            elements[i].removeAttribute("open");
        }
    };
    type ResponseType = {
        Success: boolean;
        Message: string;
        Result: any | null;
        Exception: null;
    };
    const [searchKey, setSearchKey] = useState("");
    const router = useRouter();

    const handleKeyDown = (e: any) => {
        if (e.key === "Enter") {
            router.push(`/search/${searchKey}`);
        }
    };
    return (
        <div className="bg-neutral  sticky z-[1]">
            <div className="navbar text-primary-content container mx-auto">
                <div className="navbar-start md:hidden">
                    <details className="dropdown">
                        <summary
                            role="button"
                            className="btn btn-ghost"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </summary>
                        <ul className="menu menu-sm dropdown-content mt-2 z-[1] p-2 shadow  w-52 px-1 text-lg bg-neutral rounded-none">
                            <li className="">
                                <details className="category">
                                    <summary>Tüm Ürünler</summary>
                                    <ul className="bg-neutral rounded-none">
                                        {data.Result.TreeList?.map(
                                            (item: any, key: Key) =>
                                                item.DisplayOrder > 0 && (
                                                    <li
                                                        key={key}
                                                        className="sidenav-menu list-unstyled flex "
                                                    >
                                                        <details className="category">
                                                            <summary className="sidenav-link ">
                                                                <Link
                                                                    onClick={
                                                                        removeAttributeByClassName
                                                                    }
                                                                    className="sidenav-link"
                                                                    href={`/category/${item.ID}`}
                                                                >
                                                                    {
                                                                        item.DisplayName
                                                                    }
                                                                </Link>
                                                            </summary>
                                                            <ul>
                                                                {item.SubCategoryList.map(
                                                                    (
                                                                        subItem: any,
                                                                        subKey: Key
                                                                    ) => (
                                                                        <li
                                                                            key={
                                                                                subKey
                                                                            }
                                                                            className="list-unstyled "
                                                                        >
                                                                            <Link
                                                                                href={`/products/${subItem.ID}`}
                                                                                onClick={
                                                                                    removeAttributeByClassName
                                                                                }
                                                                            >
                                                                                {
                                                                                    subItem.DisplayName
                                                                                }
                                                                            </Link>
                                                                        </li>
                                                                    )
                                                                )}
                                                            </ul>
                                                        </details>
                                                    </li>
                                                )
                                        )}
                                    </ul>
                                </details>
                            </li>
                            <li>
                                <Link href="/">Kampanyalar</Link>
                            </li>
                        </ul>
                    </details>
                </div>
                <div className="navbar-start hidden md:flex">
                    <ul className="menu menu-horizontal  px-1 text-lg">
                        <li className="">
                            <details className="category">
                                <summary>Tüm Ürünler</summary>
                                <ul className="bg-neutral rounded-none">
                                    {data.Result.TreeList?.map(
                                        (item: any, key: Key) =>
                                            item.DisplayOrder > 0 && (
                                                <li
                                                    key={key}
                                                    className="sidenav-menu list-unstyled flex "
                                                >
                                                    <details className="category">
                                                        <summary className="sidenav-link ">
                                                            <Link
                                                                onClick={
                                                                    removeAttributeByClassName
                                                                }
                                                                className="sidenav-link"
                                                                href={`/category/${item.ID}`}
                                                            >
                                                                {
                                                                    item.DisplayName
                                                                }
                                                            </Link>
                                                        </summary>
                                                        <ul>
                                                            {item.SubCategoryList.map(
                                                                (
                                                                    subItem: any,
                                                                    subKey: Key
                                                                ) => (
                                                                    <li
                                                                        key={
                                                                            subKey
                                                                        }
                                                                        className="list-unstyled "
                                                                    >
                                                                        <Link
                                                                            href={`/products/${subItem.ID}`}
                                                                            onClick={
                                                                                removeAttributeByClassName
                                                                            }
                                                                        >
                                                                            {
                                                                                subItem.DisplayName
                                                                            }
                                                                        </Link>
                                                                    </li>
                                                                )
                                                            )}
                                                        </ul>
                                                    </details>
                                                </li>
                                            )
                                    )}
                                </ul>
                            </details>
                        </li>
                        <li>
                            <Link href="/">Kampanyalar</Link>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end relative lg:gap-2">
                    <details className="dropdown dropdown-left items-center content-center justify-center justify-items-center block md:hidden">
                        <summary className="btn btn-md btn-primary btn-circle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                                />
                            </svg>
                        </summary>
                        <ul className=" shadow menu dropdown-content z-[1] bg-base-100  w-44 input input-bordered ">
                            <input
                                type="text"
                                className="grow text-secondary w-full h-full"
                                placeholder="Ürün Ara"
                                onKeyDown={handleKeyDown}
                                onChange={(e) => setSearchKey(e.target.value)}
                            />
                        </ul>
                    </details>
                    <label className="input  input-bordered items-center gap-2 hidden md:flex">
                        <input
                            type="text"
                            className="grow text-secondary"
                            placeholder="Ürün Ara"
                            onKeyDown={handleKeyDown}
                            onChange={(e) => setSearchKey(e.target.value)}
                        />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="secondary"
                            className="w-4 h-4 opacity-70"
                        >
                            <path
                                fillRule="evenodd"
                                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </label>

                    <button className="btn btn-md btn-circle md:hidden btn-primary">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                            />
                        </svg>
                    </button>
                    <button className="btn btn-md hidden md:block btn-primary">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                            />
                        </svg>
                    </button>
                    <button
                        className="btn btn-md btn-circle md:hidden btn-primary"
                        onClick={() => {
                            router.push("/login");
                        }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                            />
                        </svg>
                    </button>
                    <button
                        className="btn btn-md hidden md:block btn-primary text-lg"
                        onClick={() => {
                            router.push("/login");
                        }}
                    >
                        Giriş Yap
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navigation;
