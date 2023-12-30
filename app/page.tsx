import Image from "next/image";
import Logo from "./ui/logo";
import SignUp from "./ui/SignUp";
import { golos } from "./ui/fonts";
import { kanit } from "./ui/fonts";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-2">
      {/* Header section👇 */}
      <div className="flex items-end rounded-lg p-4 px-1">
        {/* Logo 👇 */}
        <Logo />
      </div>

      {/* Content section👇 */}
      <div className=" p-3 w-3/5 flex mx-2 items-center justify-between gap-x-20 rounded-2xl">
        {/* Hero image 👇 */}
        <div>
          <Image
            src="/hero-image.png"
            alt="Hero desktop image"
            height={4000}
            width={4000}
            className=" rounded-2xl"
          />
        </div>

        {/* Intro */}
        <div className="space-y-4">
          <div className="justify-around">
            <h2 className={`font-semibold text-center mb-1 text-blue-500 ${kanit.className}`}>
              ReelRealm
            </h2>
            <p className={golos.className}>
              Displays a list of movies that a user can update or delete. He can
              even add new movies to the list using the Add a movie button
            </p>
            <p className={`text-center my-1 ${golos.className}`}>Sign up or login to continue</p>
          </div>
          <SignUp />
        </div>
      </div>
    </main>
  );
}
