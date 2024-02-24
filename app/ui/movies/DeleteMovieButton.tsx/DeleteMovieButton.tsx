import { deleteMovie } from "@/app/lib/actions"
import { Button } from "@/components/ui/button"

const DeleteMovieButton = ({id}:{id:number}) => {
    const deleteMovieWithId = deleteMovie.bind(null,id)
    
  return (
    <form action={deleteMovieWithId}>
        <Button>
            Delete
        </Button>
    </form>
  )
}

export default DeleteMovieButton
