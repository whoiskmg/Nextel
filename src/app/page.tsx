import { getCategory } from "@/api/fetchCategory";
import Categories from "@/components/Categories/Categories";

export default async function Home() {
    const data = await getCategory();
    return (
        <main className="flex-grow">
            <Categories data={data} />
        </main>
    );
}
