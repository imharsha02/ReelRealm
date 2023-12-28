import Link from "next/link";
import Logo from "@/app/ui/logo";
import { signOut } from "@/auth";
import { RxExit } from "react-icons/rx";
import Menu from "./Menu";

const Navbar = () => {
  return (
    <>
  
    <Menu />

    <div className="hidden lg:flex items-center justify-between rounded-xl sticky top-0 p-3 px-10 bg-slate-200 w-[95%]">
      <Logo />
      <div className="flex gap-3">
        <Link
          href="/movies"
          className="bg-blue-500 px-5 py-2 text-white border-none rounded-md"
          title="Go to Dashboard"
        >
          Home
        </Link>

        <Link
          href="/movies/add"
          className="bg-blue-500 px-5 py-2 text-white border-none rounded-md"
          title="Add a movie"
        >
          Add a movie
        </Link>

        <form
          className="flex items-center gap-1 bg-blue-500 px-5 py-2 text-white border-none rounded-md"
          action={async () => {
            "use server";
            await signOut();
          }}
        >
          <button title="Go to Dashboard">Sign out</button>
          <RxExit />
        </form>
      </div>
    </div>
    </>
  );
};

export default Navbar;
