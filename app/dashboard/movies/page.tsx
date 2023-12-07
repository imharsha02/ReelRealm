import Card from "@/app/ui/dashboard/Cards/Cards"
import { fetchMovies } from "@/app/lib/utils"
const Moviespage = async () => {
  const movies = await fetchMovies();
  return (
    <div className="flex flex-wrap gap-20 mt-5">
      {
        movies.map((movie) => {
          return (
            <Card name={movie.name} imageSrc={movie.imageSrc} key={movie.movie_id}/>
          )
        })
      }
    </div>
  )
}

export default Moviespage
