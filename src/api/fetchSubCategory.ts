export async function getSubCategory(id: string) {
    const res = await fetch(
        `https://store.vrunibex.com/mobile2/mbProduct/ProductList?CategoryID=${id}`
    );

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    return res.json();
}
