"use client";
import { updateMovie } from "@/app/lib/actions";
import { Detail } from "@/app/lib/definations";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Card, CardContent } from "@/components/ui/card";
const formSchema = z.object({
  movie_id: z.number(),
  movie_name: z.string(),
  lead_role_by: z.string(),
  release_date: z.string(),
});

const EditForm = ({
  movieDetails,
  id,
}: {
  movieDetails: Detail;
  id?: number;
}) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      movie_id: movieDetails.movie_id,
      movie_name: movieDetails.movie_name,
      lead_role_by: movieDetails.lead_role_by,
      release_date: movieDetails.release_date,
    },
  });
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
      <Card className="mt-2 w-max mx-auto">
        <CardContent>
          <Form {...form}>
            <form action={updateMovieWithId}>
              <FormField
                control={form.control}
                name="movie_id"
                render={({ field }) => (
                  <FormItem className="flex items-center gap-2">
                    <FormLabel>Movie Id:</FormLabel>
                    <FormControl>
                      <Input type="number" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="movie_name"
                render={({ field }) => (
                  <FormItem className="flex items-center gap-2">
                    <FormLabel>Movie Name:</FormLabel>
                    <FormControl>
                      <Input type="string" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="lead_role_by"
                render={({ field }) => (
                  <FormItem className="flex items-center gap-2">
                    <FormLabel>Lead role by:</FormLabel>
                    <FormControl>
                      <Input type="string" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="release_date"
                render={({ field }) => (
                  <FormItem className="flex items-center gap-2">
                    <FormLabel>Release date:</FormLabel>
                    <FormControl>
                      <Input type="string" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <div className="flex justify-center">
                <div className="mt-6 flex justify-end gap-4">
                  <Button asChild>
                    <Link
                      href="/movies"
                      className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
                    >
                      Cancel
                    </Link>
                  </Button>
                  <Button type="submit">Edit Movie</Button>
                </div>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    );
  }
};

export default EditForm;
