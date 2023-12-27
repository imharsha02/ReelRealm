import { deleteMovie } from "@/app/lib/actions"

const DeleteMovieButton = ({id}:{id:number}) => {
    const deleteMovieWithId = deleteMovie.bind(null,id)
    
  return (
    <form action={deleteMovieWithId}>
        <button className="px-5 hover:cursor-pointer py-2 hover:bg-blue-400 transition bg-blue-500 text-white border-none rounded-sm">
            Delete
        </button>
    </form>
  )
}

export default DeleteMovieButton
