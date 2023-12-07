import Image from "next/image";
import { kanit } from "../../fonts";

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
    <div>
      <div>
        <Image src={imageSrc} alt="" height={30} width={30} />
      </div>
      <div>
        <h3 className={`flex flex-wrap ${kanit.className}`}>{name}</h3>
        <div className="flex gap-px">
        <h4 className={kanit.className}>{episodes?"Episodes:":''}</h4>
        {episodes}
        </div>
      </div>
    </div>
  );
}
