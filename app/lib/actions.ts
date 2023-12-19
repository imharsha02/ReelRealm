"use server";
import { sql } from "@vercel/postgres";
import { z } from "zod";
import { revalidatePath } from "next/cache";
import uploadThumbnail from "./uploadThumbnail";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";

export async function authenticate(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    await signIn("credentials", formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid credentials.";
        default:
          return "Something went wrong.";
      }
    }
    throw error;
  }
}

export async function addUser(formData: FormData) {
  const userSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string(),
  });
  const user = userSchema;
  const userDetails = user.parse({
    name: formData.get("username"),
    email: formData.get("useremail"),
    password: formData.get("password"),
  });
  const hashedPassword = await bcrypt.hash(userDetails.password, 10);
  try {
    await sql`
    INSERT INTO users (name,email,password) VALUES (${userDetails.name}, ${userDetails.email}, ${hashedPassword});
    `;
  } catch (error) {
    console.error("Failed to store user", error);
  }
  revalidatePath("/dashboard");
  redirect("/dashboard");
}







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
  try {
    await sql`
    INSERT INTO movies (name, imageSrc) VALUES (${movieData.name}, ${thumbnailUrl})
    `;
  } catch (error) {
    console.error("Failed to add to movies table: ", error);
  }

  // Insert detailsData into database
  try {
    await sql`
    INSERT INTO details (movie_name,leadRoleBy,release_date,imageSrc)
    VALUES(${detailsData.name}, ${detailsData.actors}, ${detailsData.release_date} ,${thumbnailUrl})
    `;
  } catch (error) {
    console.error("Failed to add to details table: ", error);
  }
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
  try {
    await sql`
      UPDATE details 
      SET movie_name = ${movie_name}, leadRoleBy = ${actors}, release_date = ${release_date} 
      WHERE movie_id = ${id}
    `;
  } catch (error) {
    console.error("Failed to update details", error);
  }
  revalidatePath(`/dashboard/movies`);
  redirect(`/dashboard/movies/${id}`);
}







export async function deleteMovie(id: number) {
  try {
    await sql`DELETE FROM movies WHERE movie_id=${id}`;
  } catch (error) {
    console.error("Failed to delete movie: ", error);
  }
  revalidatePath("/dashboard/movies");

  try {
    await sql`DELETE FROM details WHERE movie_id=${id}`;
  } catch (error) {
    console.error("Failed to delete movie details");
  }
  revalidatePath(`/dashboard/movies/${id}`);
}






export async function AddDetailsAction(id:number,formData:FormData) {
  const thumbnailFile = formData.get("movie_thumbnail");
  let thumbnailUrl = "";

  if (thumbnailFile instanceof File) {
    // TODO: Upload the file and get the URL
    thumbnailUrl = await uploadThumbnail(thumbnailFile); // This function should handle the file upload
  }
  const detailsSchema = z.object({
    movie_name: z.string(),
    actors: z.string(),
    release_date: z.string(),
    imageSrc:z.string().optional(),
  });
  const details = detailsSchema;
  const newDetails = details.parse({
    movie_id:formData.get("movie_id"),
    movie_name: formData.get("movie_name"),
    actors: formData.get("leadRoleBy"),
    release_date: formData.get("release_date"),
    imageSrc:thumbnailUrl
  });
  try{

    await sql`
      INSERT INTO details (movie_name,leadRoleBy,release_date,imageSrc) VALUES(${newDetails.movie_name}, ${newDetails.actors}, ${newDetails.release_date}, ${thumbnailUrl})
    `;
  }catch(error){
    console.error(error);
  }
  revalidatePath(`/dashboard/movies/${id}`);
}
