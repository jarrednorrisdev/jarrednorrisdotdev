import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import NavMenu from "./nav-menu";

export default async function Navbar() {
  return (
    <nav className="border-b transition-all duration-300   ">
      <div className="container mx-auto flex items-center justify-between py-2">
        <h1 className="transition-hover cursor-pointer font-semibold hover:opacity-75">
          <Link href="/">
            <h1 className="inline text-2xl font-extrabold tracking-tight lg:text-2xl ">
              jarrednorris
            </h1>
            {/* <h1 className="text-2xl lg:text-2xl font-extrabold tracking-tight inline text-slate-500">
							.
						</h1> */}
            <h1 className=" inline text-2xl font-extrabold tracking-tight text-primary lg:text-2xl">
              dev
            </h1>
          </Link>
        </h1>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <NavMenu />
        </div>
      </div>
    </nav>
  );
}
