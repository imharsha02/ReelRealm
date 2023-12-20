import { kanit } from "@/app/ui/fonts";
import { fetchMovies } from "@/app/lib/utils";
import { fetchDetails } from "@/app/lib/utils";
import { Detail } from "@/app/lib/definations";
import Image from "next/image";
import Pagination from "../_components/Pagination";
import { Movies } from "@/app/lib/definations";

const IndividualMovie = async ({
  params,
}: {
  params: { movie_id: number };
}) => {
  const allMovies:Movies[] = await fetchMovies();
  const movieDetails = await fetchDetails(params.movie_id);
  console.log(movieDetails);
  const movieId = Number(movieDetails.movie_id);

  return (
    <>
        return (
          <div className="my-5 mx-auto w-max space-y-3">
            <Image
              src={movieDetails.imageSrc}
              alt=""
              className="rounded-lg p-3 bg-slate-100 border-none"
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
                <p className="text-lg">{movieDetails.leadRoleBy}</p>
              </div>
              <div className="flex gap-1 items-center">
                <h3 className={`text-xl ${kanit.className}`}>Release date</h3>
                <p className="text-lg">{movieDetails.release_date}</p>
              </div>
            </div>
            <Pagination movieId = {movieId} allMovies = {allMovies}/>
          </div>
        );
    </>
  );
};

export default IndividualMovie;
