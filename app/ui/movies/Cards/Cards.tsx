import Image from "next/image";

import { kanit } from "../../fonts";
import { Card, CardContent, CardDescription } from "@/components/ui/card";
import { TypographyLead } from "@/components/ui/TypographyLead";

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
        <CardDescription className="space-y-2">
          <Image src={Image_source} alt="" height={200} width={200} />
          <TypographyLead>{name}</TypographyLead>
        </CardDescription>
      </CardContent>
    </Card>
  );
}
