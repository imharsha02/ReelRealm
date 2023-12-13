import Card from "@/app/ui/dashboard/Cards/Cards";
import { fetchMovies } from "@/app/lib/utils";
import Link from "next/link";
const Moviespage = async () => {
  const movies = await fetchMovies();
  return (
    <div className="flex flex-wrap gap-20 mt-5">
      {movies.map((movie) => {
        return (
          <Link href={`/dashboard/movies/${movie.movie_id}`} key={movie.movie_id} title={`Movie No. ${movie.movie_id}`}>
            <Card
              name={movie.name}
              imageSrc={movie.imageSrc}
            />
          </Link>
        );
      })}
    </div>
  );
};

export default Moviespage;
