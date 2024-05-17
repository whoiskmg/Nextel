export async function getCategory() {
    const res = await fetch(
        "https://store.vrunibex.com/mobile2/mbProduct/CategoryList"
    );

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    return res.json();
}
