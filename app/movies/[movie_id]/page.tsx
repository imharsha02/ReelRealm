import { kanit } from "@/app/ui/fonts";
import { fetchMovies } from "@/app/lib/utils";
import { fetchDetails } from "@/app/lib/utils";
import Image from "next/image";
import { images } from "@/app/lib/images";
import Pagination from "../_components/Pagination";
import { Card, CardDescription } from "@/components/ui/card";
import { TypographyH4 } from "@/components/ui/TypographyH4";
import { TypographyP } from "@/components/ui/TypographyP";
import { TypographyLead } from "@/components/ui/TypographyLead";

const IndividualMovie = async ({
  params,
}: {
  params: { movie_id: number };
}) => {
  const allMoviesPromise = fetchMovies();
  const movieDetailsPromise = fetchDetails(params.movie_id);
  const [allMovies, movieDetails] = await Promise.all([
    allMoviesPromise,
    movieDetailsPromise,
  ]);
  console.log(movieDetails);
  console.log(movieDetails.lead_role_by);
  const movieId = Number(movieDetails.movie_id);

  const imageWithIndex = images[movieDetails.movie_id - 1];
  return (
    <div className="my-5 mx-auto md:w-max space-y-3">
      <Card>
        <Image
          src={imageWithIndex.Image_source}
          alt=""
          className="p-3 rounded-lg bg-background border-none"
          height={600}
          width={600}
        />
        <CardDescription className="space-y-3 p-3">
          <div className="flex gap-1 items-center">
            <TypographyH4>Movie</TypographyH4>
            <TypographyLead>{movieDetails.movie_name}</TypographyLead>
          </div>
          <div className="flex gap-1 items-center">
            <TypographyH4>Lead role By</TypographyH4>
            <TypographyLead>{movieDetails.lead_role_by}</TypographyLead>
          </div>
          <div className="flex gap-1 items-center">
            <TypographyH4>Release date</TypographyH4>
            <TypographyLead>{movieDetails.release_date}</TypographyLead>
          </div>
        </CardDescription>
      </Card>
      <Pagination movieId={movieId} allMovies={allMovies} />
    </div>
  );
};

export default IndividualMovie;
