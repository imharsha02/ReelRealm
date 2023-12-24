import Image from "next/image";

import { kanit } from "../../fonts";

export default async function Card({
  name,
  Image_source,
}: {
  name: string;
  Image_source: string;
}) {
  return (
<<<<<<< HEAD
    <div className="p-5 space-y-2 w-36 bg-slate-100 rounded-md">
      <div className="flex justify-center">
        <Image src={Image_source} alt="" height={50} width={50} />
      </div>
      <div className="">
        <h3 className={`flex flex-wrap text-center ${kanit.className}`}>{name}</h3>
=======
    <div className="p-3 bg-slate-100 rounded-md">
      <div className=" w-32 h-32">
        <Image src={Image_source} alt={name} width={128} height={128} />
      </div>
      <div>
        <h3 className={`flex flex-wrap ${kanit.className}`}>{name}</h3>
        <div className="flex gap-px">
        </div>
>>>>>>> 52dec5177d3a46866b15e6cc0eaad0ac0ad64794
      </div>
    </div>
  );
}
