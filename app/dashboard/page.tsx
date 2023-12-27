import { Metadata } from "next";
import { fetchUser } from "../lib/utils";
// import { useSession } from "next-auth/react";

export const metadata: Metadata = {
  title: "Dashboard",
};
export default async function Page() {
    // const { data: session } = useSession();
  return (
    <div className="mx-auto flex justify-center flex-wrap gap-60">
      <div className=" bg-slate-100 rounded-md p-2 w-96 h-96">
        <div className="rounded-full w-max p-2 mx-auto bg-slate-200 border-red-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className=" w-28 fill-white  h-28"
          >
            <path
              fillRule="evenodd"
              d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
              clipRule="evenodd"
            />
          </svg>
            {/* {session?.user.name} */}
        </div>
      </div>
      <div className="bg-slate-100 rounded-md w-96 h-96">hi</div>
      <div className="bg-slate-100 rounded-md w-96 h-96">hi</div>
    </div>
  );
}
