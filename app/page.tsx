import Image from "next/image";
import Logo from "./ui/logo";
import SignUp from "./ui/SignUp";

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
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nihil
            ipsa, dicta iure nemo ipsum omnis doloribus corrupti fuga officiis
            ut, aliquam eaque saepe atque nostrum dolores libero, quidem sunt.
          </p>
          <SignUp />
        </div>
      </div>
    </main>
  );
}
