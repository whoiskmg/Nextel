import Image from "next/image";
import Link from "next/link";

const Header = () => {
    return (
        <header className="justify-center flex pt-5 pb-5 w-full bg-base-100">
            <Link href="/">
                <Image
                    src="/logo/Vestel.svg"
                    className="w-28 sm:w-44"
                    alt="Vestel Website Logo"
                    width={160}
                    height={100}
                />
            </Link>
        </header>
    );
};
export default Header;
