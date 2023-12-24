import Card from "@/app/ui/dashboard/Cards/Cards";
import { fetchMovies } from "@/app/lib/utils";
import Link from "next/link";
import UpdateMovieButton from "@/app/ui/dashboard/UpdateMovieButton/UpdateMovieButton";
import DeleteMovieButton from "@/app/ui/dashboard/DeleteMovieButton.tsx/DeleteMovieButton";
import { Metadata } from "next";
import { images } from "@/app/lib/images";
export const metadata:Metadata = {
  title:"Movies",
}
const Moviespage = async () => {
  const movies = await fetchMovies();
  console.log(movies);
  return (
    <div className="flex mr-20  flex-wrap gap-10 justify-start items-center mt-5">
      {movies.map((movie,index) => {
        console.log(images[index])
        const Image_source = images[index]
        
        return (
          <div key={movie.movie_id} className="h-3/2 gap-y-2">
            <Link
              href={`/dashboard/movies/${movie.movie_id}`}
              title={`Movie No. ${movie.movie_id}`}
            >
              <Card name={movie.name} Image_source={Image_source?.Image_source} />
            </Link>
            <div className="flex justify-between">
              <UpdateMovieButton id={movie.movie_id} />
              <DeleteMovieButton id={movie.movie_id}/>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Moviespage;
