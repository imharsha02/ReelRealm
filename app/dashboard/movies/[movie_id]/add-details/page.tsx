import { Movies } from "@/app/lib/definations";
import { fetchMoviesWithNoDetails } from "@/app/lib/utils";
import AddDetails from "@/app/ui/movies/components/AddDetails";
import { sql } from '@vercel/postgres';

const DetailsPage = async () => {
      const movies = await fetchMoviesWithNoDetails();
  return (
    <div>
      {movies.map((movie) => (
        <AddDetails movie={movie} key={movie.movie_id} />
      ))}
    </div>
  );
};

export default DetailsPage;
