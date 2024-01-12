import Image from "next/image";
import { ThemeToggler } from "@/components/Themetoggler";
import Link from "next/link";
import SearchInput from "@/components/SearchInput";
// import GenreDropdown from "./GenreDropdown";
// import SearchInput from "./SearchInput";

function Header() {
  return (
    <header className="fixed w-full z-20 top-0 flex items-center justify-between p-5 bg-gradient-to-t from-gray-200/0 via-gray-900/25 to-gray-900">
      <Link href="/" className="mr-10">
        <h1>MY NAV</h1>
      </Link>

      <div className="flex space-x-2">
        <SearchInput />
        <ThemeToggler />
      </div>
    </header>
  );
}

export default Header;
