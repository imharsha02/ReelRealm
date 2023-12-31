import { updateMovie } from "@/app/lib/actions";
import { Detail } from "@/app/lib/definations";

import Link from "next/link";

const EditForm = ({
  movieDetails,
  id,
}: {
  movieDetails: Detail;
  id?: number;
}) => {
  if (!movieDetails) {
    return (
      <div className="flex flex-col justify-center">
        <h3>Sorry! No details were added for this movie.</h3>
        <Link
          href={`/movies/${id}/add-details`}
          className="w-max px-5 py-2 rounded-lg bg-blue-500 hover:bg-blue-400 transition text-white"
        >
          Click to add details
        </Link>
      </div>
    );
  } else {
    const updateMovieWithId = updateMovie.bind(null, movieDetails.movie_id);
    return (
      <div className="lg:max-w-screen mx-[9px] lg:mx-auto">
        <form
          action={updateMovieWithId}
          className="bg-slate-200 overflow-hidden p-5 space-y-3 rounded-lg lg:mx-auto lg:w-max"
        >
          <div>
            <label htmlFor="movie_id" className="mr-2">
              Movie No.
            </label>
            <input
              name="movie_id"
              type="number"
              defaultValue={movieDetails.movie_id}
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
              defaultValue={movieDetails.movie_name}
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
              defaultValue={movieDetails.lead_role_by}
              className="rounded p-1 focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="release_date" className="mr-2">
              Release date
            </label>
            <input
              type="text"
              name="release_date"
              className="rounded p-1 focus:outline-none"
              defaultValue={movieDetails.release_date}
            />
          </div>
          <div className="flex justify-center">
            <div className="mt-6 flex justify-end gap-4">
              <Link
                href="/movies"
                className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
              >
                Cancel
              </Link>
              <button
                className="bg-blue-500 hover:bg-blue-400 text-white px-5 py-2"
                type="submit"
              >
                Edit Movie
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
};

export default EditForm;
