import { fetchDetails } from "@/app/lib/utils";
import EditForm from "@/app/ui/movies/EditForm";
import { TypographyH2 } from "@/components/ui/TypographyH2";

const EditPage = async ({ params }: { params: { movie_id: number } }) => {
  const id = params.movie_id;
  const individualMovie = await fetchDetails(id);
  const movieToEdit = Array.isArray(individualMovie)
    ? individualMovie[0]
    : individualMovie;
  return (
    <div className="my-3">
      <TypographyH2 className="text-center">
        Update {individualMovie.movie_name}
      </TypographyH2>
      <EditForm movieDetails={movieToEdit} />
    </div>
  );
};

export default EditPage;
