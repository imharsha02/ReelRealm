import { kanit } from "@/app/ui/fonts";
import { fetchMovies } from "@/app/lib/utils";
import { fetchDetails } from "@/app/lib/utils";
import Image from "next/image";
import { images } from "@/app/lib/images";
import Pagination from "../_components/Pagination";

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
  console.log(movieDetails)
  console.log(movieDetails.lead_role_by);
  const movieId = Number(movieDetails.movie_id);

  const imageWithIndex = images[movieDetails.movie_id-1]
  return (
    <>
      <div className="my-5 mx-auto lg:w-max space-y-3">
        <Image
          src={imageWithIndex.Image_source}
          alt=""
          className="p-3 rounded-lg bg-slate-100 border-none"
          height={600}
          width={600}
        />
        <div className="w-max mx-auto">
          <div className="flex gap-1 items-center">
            <h3 className={`text-xl ${kanit.className}`}>Movie</h3>
            <p className="text-lg">{movieDetails.movie_name}</p>
          </div>
          <div className="flex gap-1 items-center">
            <h3 className={`text-xl ${kanit.className}`}>Lead role By</h3>
            <p className="text-lg">{movieDetails.lead_role_by}</p>
          </div>
          <div className="flex gap-1 items-center">
            <h3 className={`text-xl ${kanit.className}`}>Release date</h3>
            <p className="text-lg">{movieDetails.release_date}</p>
          </div>
        </div>
        <Pagination movieId={movieId} allMovies={allMovies} />
      </div>
    </>
  );
};

export default IndividualMovie;
