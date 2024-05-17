import { getProductDetails } from "@/api/fetchProductDetails";
import { Key } from "react";

export default async function ProductsPage({
    params,
}: {
    params: { id: string };
}) {
    const data = await getProductDetails(params.id);
    const item = data.Result;
    type ImageObject = {
        Path: string;
        SizeCode: string;
        Width: number | null;
        Height: number | null;
        AltText: string | null;
        Title: string | null;
        MediaFormat: string;
    };

    type ImageList = {
        ImageList: ImageObject[];
    };

    type ImageSetList = ImageList[];

    const getFilteredImages = (ImageSetList: ImageSetList): ImageObject[] => {
        return item.ImageSetList.flatMap((ImageSetList: ImageList) =>
            ImageSetList.ImageList.filter(
                (image) =>
                    image.SizeCode === "vestel-detail-fix" &&
                    image.MediaFormat === "I"
            )
        );
    };

    const getRatingStars = () => {
        const fullStars = Math.floor(item.RateAverage);
        const halfStar = item.RateAverage - fullStars >= 0.5 ? 1 : 0;
        const emptyStars = 5 - fullStars - halfStar;

        return (
            <div className="flex pt-4">
                {[...Array(fullStars)].map((_, i) => (
                    <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="red"
                        className="md:w-8 md:h-8"
                    >
                        <path
                            fill="red"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                        />
                    </svg>
                ))}
                {halfStar ? (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="red"
                        className="md:w-8 md:h-8"
                    >
                        <defs>
                            <linearGradient id="grad">
                                <stop
                                    offset="50%"
                                    stop-color="red"
                                />
                                <stop
                                    offset="50%"
                                    stop-color="white"
                                />
                            </linearGradient>
                        </defs>
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                            fill="url(#grad)"
                        />
                    </svg>
                ) : null}
                {[...Array(emptyStars)].map((_, i) => (
                    <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="red"
                        className="md:w-8 md:h-8"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                        />
                    </svg>
                ))}
            </div>
        );
    };

    const filteredImages = getFilteredImages(item.ImageSetList);
    return (
        <main className=" container mx-auto pt-8">
            <div className="lg:flex space-x-2 md:space-x-16">
                <div className="flex flex-col items-center">
                    <div className="w-[270px] md:w-[370px] lg:w-[540px] carousel rounded-box">
                        {filteredImages.map((item: any, key: Key) => (
                            <div
                                key={key}
                                id={`#item${key}`}
                                className="carousel-item w-full"
                            >
                                <img
                                    className="w-full "
                                    src={item.Path}
                                    alt=""
                                />
                            </div>
                        ))}
                    </div>
                    <div className="flex pt-2">
                        {filteredImages.map((item: any, key: Key) => (
                            <div
                                key={key}
                                className="md:w-[85px] lg:w-[110px] md:h-[85px] lg:h-[110px] p-[4px] lg:p-[10px] border border-neutral cursor-pointer content-center break-after-column"
                            >
                                <img
                                    src={item.Path}
                                    alt=""
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="pt-12 md:pt-16">
                    <h1 className="text-2xl md:text-4xl font-semibold">
                        {item.DisplayName}
                    </h1>
                    <div className="flex">
                        <div className="pt-6">
                            {item?.VisibleAttributeList?.length > 0 &&
                                item.VisibleAttributeList.filter(
                                    (item: any) => {
                                        if (
                                            /^Özellik\d+$/.test(item.CodeName)
                                        ) {
                                            if (item.CustomValueText !== null) {
                                                return item;
                                            }
                                        }
                                        return false;
                                    }
                                ).map((item: any, key: Key) => (
                                    <div
                                        className="flex md:py-2"
                                        key={key}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="red"
                                            className="w-6 h-6"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="m8.25 4.5 7.5 7.5-7.5 7.5"
                                            />
                                        </svg>
                                        {item.CustomValueText !== null && (
                                            <h2 className="text-md md:text-xl">
                                                {item.CustomValueText}
                                            </h2>
                                        )}
                                    </div>
                                ))}
                        </div>
                        <div className="ps-12 md:ps-40">
                            {getRatingStars()}
                            <h3 className="md:text-4xl font-medium pt-4">
                                {item.ActualPriceToShowOnScreen.toLocaleString()}
                                TL
                            </h3>
                            <div className="pt-4">
                                <button className="btn btn-primary font-bold text-md text-white rounded-none md:text-2xl">
                                    Sepete Ekle
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
