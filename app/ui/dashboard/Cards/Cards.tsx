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
    <div className="p-3 bg-slate-100 rounded-md">
      <div className=" w-32 h-32">
        <Image src={Image_source} alt={name} width={128} height={128} />
      </div>
      <div>
        <h3 className={`flex flex-wrap ${kanit.className}`}>{name}</h3>
        <div className="flex gap-px">
        </div>
      </div>
    </div>
  );
}
