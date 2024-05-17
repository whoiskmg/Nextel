export async function getProductDetails(id: string) {
    const res = await fetch(
        `https://store.vrunibex.com/mobile2/mbProduct/ProductDetail?productId=${id}`
    );

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    return res.json();
}
