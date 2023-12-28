import { fetchDetails } from "@/app/lib/utils";
import EditForm from "@/app/ui/movies/EditForm";

const EditPage = async ({ params }: { params: { movie_id: number } }) => {
  const id = params.movie_id;
  const individualMovie = await fetchDetails(id);
  const movieToEdit = Array.isArray(individualMovie)
    ? individualMovie[0]
    : individualMovie;
  return (
    <>
      <h1 className="text-3xl my-4 xl:my-10 text-center font-bold">
        Update {individualMovie.movie_name}
      </h1>
      <EditForm movieDetails={movieToEdit} />
    </>
  );
};

export default EditPage;
