import { fetchDetails } from "@/app/lib/utils";
import Form from "@/app/ui/movies/EditForm";

const EditForm = async ({ params }: { params: { movie_id: number } }) => {
  const id = params.movie_id;
  const individualMovie = await fetchDetails(id)
  const movieToEdit = Array.isArray(individualMovie) ? individualMovie[0] : individualMovie;
  return (
    <div>
      <Form movieDetails={movieToEdit} />
    </div>
  );
};

export default EditForm;
