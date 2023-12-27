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
    <div className="p-5 space-y-2 bg-slate-100 w-96 rounded-md">
      <div className="flex items-center justify-center">
        <Image src={Image_source} alt="" height={200} width={200} />
      </div>
      <div className="">
        <h3 className={`flex flex-wrap justify-center text-center ${kanit.className}`}>{name}</h3>
      </div>
    </div>
  );
}
