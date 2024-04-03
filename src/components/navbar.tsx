import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import NavMenu from "./nav-menu";

export default async function Navbar() {
  return (
    <nav className="flex items-center justify-between border-b px-16 py-2 transition-all  duration-300">
      <h1 className="transition-hover cursor-pointer font-semibold hover:opacity-75">
        <Link href="/">
          <h1 className="inline text-2xl font-extrabold tracking-tight lg:text-2xl ">
            jarrednorris
          </h1>
          {/* <h1 className="text-2xl lg:text-2xl font-extrabold tracking-tight inline text-slate-500">
							.
						</h1> */}
          <h1 className=" inline text-2xl font-extrabold tracking-tight text-red-500 lg:text-2xl">
            dev
          </h1>
        </Link>
      </h1>
      <div className="flex items-center gap-2">
        <ThemeToggle />
        <NavMenu />
      </div>
    </nav>
  );
}
