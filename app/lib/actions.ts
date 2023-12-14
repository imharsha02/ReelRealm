"use server";
import { sql } from "@vercel/postgres";
import { z } from "zod";
import { revalidatePath } from "next/cache";
import uploadThumbnail from "./uploadThumbnail";
import { redirect } from "next/navigation";

export async function addMovie(formData: FormData) {
  // Handle the file separately
  const thumbnailFile = formData.get("movie_thumbnail");
  let thumbnailUrl = "";

  if (thumbnailFile instanceof File) {
    // TODO: Upload the file and get the URL
    thumbnailUrl = await uploadThumbnail(thumbnailFile); // This function should handle the file upload
  }

  // Now parse and validate the other data
  const movieSchema = z.object({
    name: z.string(),
    actors: z.string(),
    release_date: z.string(),
    thumbnail: z.object({
      name: z.string(),
      size: z.number(),
      type: z.string(),
    }),
  });

  const movie = movieSchema.omit({ actors: true, release_date: true });
  const movieData = movie.parse({
    name: formData.get("movie_name"),
    thumbnail:
      thumbnailFile instanceof File
        ? {
            name: thumbnailFile.name,
            size: thumbnailFile.size,
            type: thumbnailFile.type,
          }
        : undefined,
  });

  const details = movieSchema;

  const detailsData = details.parse({
    name: formData.get("movie_name"),
    actors: formData.get("leadRoleBy"),
    release_date: formData.get("release_date"),
    thumbnail:
      thumbnailFile instanceof File
        ? {
            name: thumbnailFile.name,
            size: thumbnailFile.size,
            type: thumbnailFile.type,
          }
        : undefined,
  });

  console.log({
    movieName: formData.get("movie_name"),
    leadRoleBy: formData.get("leadRoleBy"),
    releaseDate: formData.get("release_date"),
    // Check if the thumbnail file is received correctly
    thumbnailFile:
      thumbnailFile instanceof File ? thumbnailFile.name : "No file received",
  });

  // Insert movieData into database
  await sql`
  INSERT INTO movies (name, imageSrc) VALUES (${movieData.name}, ${thumbnailUrl})
  `;

  // Insert detailsData into database
  await sql`
  INSERT INTO details (movie_name,leadRoleBy,release_date,imageSrc)
  VALUES(${detailsData.name}, ${detailsData.actors}, ${detailsData.release_date} ,${thumbnailUrl})
  `;
  // await sql`
  //     INSERT INTO details (movie_name, leadRoleBy, release_date, imageSrc) VALUES (${detailsData.name}, ${detailsData.actors}, ${detailsData.release_date},  ${thumbnailUrl})
  //   `;
  revalidatePath("/dashboard/movies");
  redirect("/dashboard/movies");
}

const UpdateMovieSchema = z.object({
  movie_id: z.coerce.number(),
  movie_name: z.string(),
  actors: z.string(),
  release_date: z.string(),
});
export async function updateMovie(id: number, formData: FormData) {
  const updateMovie = UpdateMovieSchema.omit({ movie_id: true });
  const { movie_name, actors, release_date } = updateMovie.parse({
    movie_id: formData.get("movie_id"),
    movie_name: formData.get("movie_name"),
    actors: formData.get("leadRoleBy"),
    release_date: formData.get("release_date"),
  });

  await sql`
    UPDATE details 
    SET movie_name = ${movie_name}, leadRoleBy = ${actors}, release_date = ${release_date} 
    WHERE movie_id = ${id}
  `;
  revalidatePath(`/dashboard/movies`);
  redirect(`/dashboard/movies/${id}`);
}
