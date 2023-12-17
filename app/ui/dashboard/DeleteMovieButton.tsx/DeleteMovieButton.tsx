import { deleteMovie } from "@/app/lib/actions"

const DeleteMovieButton = ({id}:{id:number}) => {
    const deleteMovieWithId = deleteMovie.bind(null,id)
    
  return (
    <form action={deleteMovieWithId}>
        <button>
            Delete
        </button>
    </form>
  )
}

export default DeleteMovieButton
