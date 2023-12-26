import { deleteMovie } from "@/app/lib/actions"

const DeleteMovieButton = ({id}:{id:number}) => {
    const deleteMovieWithId = deleteMovie.bind(null,id)
    
  return (
    <form action={deleteMovieWithId}>
        <button className="px-5 py-2 bg-blue-400 text-white border-none rounded-sm">
            Delete
        </button>
    </form>
  )
}

export default DeleteMovieButton
