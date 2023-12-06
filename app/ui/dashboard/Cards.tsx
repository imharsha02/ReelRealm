import Image from "next/image";
import { kanit } from "../fonts";

export default async function Card({
  name,
  episodes,
  imageSrc,
}: {
  name: string;
  episodes?: string;
  imageSrc: string;
}) {
  return (
    <div className="bg-slate-100 p-3 mx-auto space-y-2">
      <div className="border-b border-2 p-1">
        <Image src={imageSrc} alt="" height={30} width={30} />
      </div>
      <div>
        <h3 className={`${kanit.className} text-2xl`}>{name}</h3>
        <p className="text-xl">{episodes}</p>
      </div>
    </div>
  );
}
