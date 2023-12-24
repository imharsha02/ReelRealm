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
    <div className="p-5 space-y-2 w-36 bg-slate-100 rounded-md">
      <div className="flex justify-center">
        <Image src={Image_source} alt="" height={50} width={50} />
      </div>
      <div className="">
        <h3 className={`flex flex-wrap text-center ${kanit.className}`}>{name}</h3>
      </div>
    </div>
  );
}
