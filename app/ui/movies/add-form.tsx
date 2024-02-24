"use client";
import { fetchMovies } from "@/app/lib/utils";
import { addMovie } from "@/app/lib/actions";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
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
  movie_thumbnail: z.string(),
});
const AddMovieForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      movie_id: 25,
      movie_name: "",
      lead_role_by: "",
      release_date: "",
      movie_thumbnail: "",
    },
  });
  return (
    <Card className="w-max mx-auto">
      <CardContent>
        <Form {...form}>
          <form action={addMovie}>
            <FormField
              control={form.control}
              name="movie_id"
              render={({ field }) => (
                <FormItem className="flex items-center gap-2">
                  <FormLabel>Movie No.</FormLabel>
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
            <FormField
              name="movie_thumbnail"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="Image_source" className="mr-2">
                    Image
                  </FormLabel>
                  <FormControl>
                    <Input type="file" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button type="submit" className="mt-2 w-full">Add</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default AddMovieForm;
