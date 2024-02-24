import AddMovieForm from "@/app/ui/movies/add-form";
import { TypographyH2 } from "@/components/ui/TypographyH2";
const AddPage = () => {
  return (
    <div>
      <TypographyH2 className="text-center">
        Add a Movie
      </TypographyH2>
      <AddMovieForm />
    </div>
  );
};

export default AddPage;
