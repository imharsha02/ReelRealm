import Link from "next/link";
import Logo from "@/app/ui/logo";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between mb-3 rounded-xl p-3 bg-slate-200 w-5/6">
      <Logo />
      <div className="flex gap-3">
        <Link href="/dashboard/movies">Home</Link>
        <Link href="/dashboard/movies/sequel">Sequels</Link>
      </div>
    </div>
  );
};

export default Navbar;
