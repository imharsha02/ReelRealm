import Image from "next/image";

import { kanit } from "../../fonts";
import { Card, CardContent, CardDescription } from "@/components/ui/card";
import { TypographyH4 } from "@/components/ui/TypographyH4";

export default async function MovieCard({
  name,
  Image_source,
}: {
  name: string;
  Image_source: string;
}) {
  return (
    <Card>
      <CardContent className="pt-6">
        <CardDescription>
          <Image src={Image_source} alt="" height={200} width={200} />
          <TypographyH4>{name}</TypographyH4>
        </CardDescription>
      </CardContent>
    </Card>
  );
}
