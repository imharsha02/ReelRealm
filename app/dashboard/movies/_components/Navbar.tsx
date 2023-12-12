import Link from "next/link";
import Logo from "@/app/ui/logo";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between mb-3 rounded-xl p-3 px-10 bg-slate-200 w-11/12">
      <Logo />
      <div className="flex gap-3">
        <Link
          href="/dashboard/movies/add"
          className="bg-blue-500 px-5 py-2 text-white border-none rounded-md"
          title="Add a movie"
        >
          Add a movie
        </Link>
        <Link
          href="/dashboard/movies"
          className="bg-blue-500 px-5 py-2 text-white border-none rounded-md"
          title="Go to Dashboard"
        >
          Home
        </Link>
        <Link
          href="/dashboard/movies/sequel"
          className="bg-blue-500 px-5 py-2 text-white border-none rounded-md"
          title="Go to sequels page"
        >
          Sequels
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
