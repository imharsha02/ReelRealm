"use server";
import { sql } from "@vercel/postgres";
import { z } from "zod";
import { revalidatePath } from "next/cache";
import uploadThumbnail from "./uploadThumbnail";
import {redirect} from 'next/navigation';

export async function addMovie(formData: FormData) {
    // Handle the file separately
    const thumbnailFile = formData.get("movie_thumbnail");
    let thumbnailUrl = '';
  
    if (thumbnailFile instanceof File) {
      // TODO: Upload the file and get the URL
      thumbnailUrl = await uploadThumbnail(thumbnailFile); // This function should handle the file upload
    }
  
    // Now parse and validate the other data
    const movieSchema = z.object({
  movie_id: z.coerce.number(),
  name: z.string(),
  thumbnail:z.object({
    name: z.string(),
    size: z.number(),
    type: z.string(),
  })
});

const movie = movieSchema.omit({movie_id:true});
    const movieData = movie.parse({
      name: formData.get("movie_name"),
      thumbnail: thumbnailFile instanceof File ? {
        name: thumbnailFile.name,
        size: thumbnailFile.size,
        type: thumbnailFile.type
      } : undefined,
    });
  
    // Insert into database
    await sql`
      INSERT INTO movies (movie_id, name, imageSrc) VALUES (${movieData.name}, ${thumbnailUrl})
    `;
    revalidatePath('/dashboard/movies');
    redirect('/dashboard/movies');
  }
