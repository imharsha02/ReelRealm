"use client";
import { CiHome } from "react-icons/ci";
import { MdOutlineMovieFilter } from "react-icons/md";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
const links = [
  {
    name: "Home",
    href: "/movies",
    icon: CiHome,
  },
  {
    name: "Movies",
    href: "/movies",
    icon: MdOutlineMovieFilter,
  },
];
const NavLinks = () => {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            className={clsx(
              "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
              {
                "bg-sky-100 text-blue-600": pathname === link.href,
              }
            )}
            href={link.href}
          >
            <LinkIcon className="w-6" />
            <p>{link.name}</p>
          </Link>
        );
      })}
    </>
  );
};

export default NavLinks;
