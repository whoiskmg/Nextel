export async function getSearchResults(slug: string) {
    console.log("fetching....");
    const res = await fetch(
        `https://store.vrunibex.com/mobile2/mbProduct/ProductSearch?searchKey=${slug}`,
        { cache: "no-store" }
    );

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    return res.json();
}
