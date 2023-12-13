import { fetchMovies } from "@/app/lib/utils";
const DetailsForm = async () => {
  const movies = await fetchMovies();
  const numberOfMovies = movies.length;
  console.log(numberOfMovies)
  return (
    <div className=" max-w-screen mx-auto py-10">
      <form
        className="bg-slate-200 p-5 space-y-3 rounded-lg mx-auto  w-max"
      >
        <div>
          <label htmlFor="movie_id" className="mr-2">
            Movie No.
          </label>
          <input
            name="movie_id"
            type="number"
            disabled
            value={numberOfMovies + 1}
            className="rounded p-1 focus:outline-none"
          />
        </div>


        <div>
          <label htmlFor="movie_name" className="mr-2">
            Name
          </label>
          <input
            type="text"
            name="movie_name"
            className="rounded p-1 focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor="movie_name" className="mr-2">
            Actors
          </label>
          <input
            type="text"
            name="actors"
            className="rounded p-1 focus:outline-none"
          />
        </div>
        
        <div>
          <label htmlFor="movie_name" className="mr-2">
            Release Date
          </label>
          <input
            type="text"
            name="release_date"
            className="rounded p-1 focus:outline-none"
          />
        </div>


        <div>
          <label htmlFor="imageSrc" className="mr-2">
            Image
          </label>
          <input
            type="file"
            name="movie_detail_thumbnail"
            className="rounded px-2 p-1 focus:outline-none"
          />
        </div>


        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 text-white font-bold px-5 py-2 rounded-md hover:bg-blue-400 transition"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default DetailsForm;
