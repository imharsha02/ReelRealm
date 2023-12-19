import { AddDetailsAction } from "@/app/lib/actions"
import { Movies } from "@/app/lib/definations"

import Link from 'next/link'
const AddDetails = ({id,movie}:{id:number, movie:Movies}) => {
  const addDetailsWithId = AddDetailsAction.bind(null,id);
    return (
      <div className=" max-w-screen mx-auto py-10">
      <form action={addDetailsWithId}
        className="bg-slate-200 p-5 space-y-3 rounded-lg mx-auto w-max"
      >
        <div>
          <label htmlFor="movie_id" className="mr-2">
            Movie No.
          </label>
          <input
            name="movie_id"
            type="number"
            disabled
            defaultValue={movie.movie_id}
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
            defaultValue={movie.name}
            className="rounded p-1 focus:outline-none"
          />
        </div>


        <div>
          <label htmlFor="leadRoleBy" className="mr-2">
            Actors
          </label>
          <input
            type="text"
            name="leadRoleBy"
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
            defaultValue={movie.imageSrc}
          />
        </div>
        <div className="flex justify-center">
          <div className="mt-6 flex justify-end gap-4">
            <Link
              href="/dashboard/movies"
              className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
            >
              Cancel
            </Link>
            <button
              className="bg-blue-500 hover:bg-blue-400 text-white px-5 py-2"
              type="submit"
            >
              Done
            </button>
          </div>
        </div>
      </form>
    </div>
    )
}

export default AddDetails
