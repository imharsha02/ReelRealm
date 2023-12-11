import { sql } from "@vercel/postgres";
import { unstable_noStore as noStore } from "next/cache";
import { User, Shows, Movies, Sequel, Detail } from "./definations";
export async function fetchShows() {
  try {
    const shows = await sql<Shows> `SELECT * FROM shows`;
    return shows.rows;
  } catch (error) {
    console.error("database error:", error);
    throw new Error("Failed to fetch data");
  }
}
export async function fetchMovies() {
  try {
    const movies = await sql<Movies> `SELECT * FROM movies`;
    return movies.rows;
  } catch (error) {
    console.error("Database error:", error);
    throw new Error("Failed to fetch data");
  }
}

export async function fetchSequels() {
  try {
    const sequels = await sql<Sequel> `SELECT * FROM sequels`;
    return sequels.rows;
  } catch (error) {
    console.error("Database error:", error);
    throw new Error("Failed to fetch data");
  }
};

export async function fetchDetails(id:number) {
  noStore()
  try {
    const details = await sql<Detail> `SELECT * FROM details WHERE movie_id = ${id}`;
    return details.rows;
  } catch (error) {
    console.error("Database error:", error);
    throw new Error("Failed to fetch data");
  }
}

export async function fetchUser(email: string) {
  try {
    const users = await sql<User> `SELECT * FROM users WHERE email=${email}`;
    return users.rows[0] as User;
  } catch (error) {
    console.error("Failed to fetch user:", error);
    throw new Error("Failed to fetch user.");
  }
}

