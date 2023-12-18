import { BiCameraMovie } from "react-icons/bi";
import { lato } from "@/app/ui/fonts";
export default function Logo() {
  return (
    <div className="flex gap-1 items-center">
      <div className="h-9 w-9">
        <BiCameraMovie className="w-9 h-9"/>
      </div>
      <p className={`${lato.className} text-xl`}>Shows-I-Watched</p>
    </div>
  );
}
