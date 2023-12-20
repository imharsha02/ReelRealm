import { fetchMovies } from "@/app/lib/utils";
import { addMovie } from "@/app/lib/actions";
const Form = async () => {
  const movies = await fetchMovies();
  const numberOfMovies = movies.length;
  return (
    <div className=" max-w-screen mx-auto py-10">
      <form
        action={addMovie}
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
          <label htmlFor="lead_role_by" className="mr-2">
            Actors
          </label>
          <input
            type="text"
            name="lead_role_by"
            className="rounded p-1 focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="lead_role_by" className="mr-2">
            Release date
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
            name="movie_thumbnail"
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

export default Form;
