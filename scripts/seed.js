const { db } = require("@vercel/postgres");
const { users, shows, movies } = require("../app/lib/placeholder-shows.ts");
const bcrypt = require("bcrypt");
async function seedUsers(client) {
  try {
    // await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Creating users table
    const createTable = await client.sql`
            CREATE TABLE IF NOT EXISTS users(
                id VARCHAR(225) PRIMARY KEY,
                name VARCHAR(225) NOT NULL,
                email TEXT NOT NULL UNIQUE,
                password TEXT NOT NULL
            );
        `;
    console.log("Created users table");

    //Inserting data into users table
    const insertedUser = await Promise.all(
      users.map(async (user) => {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        return client.sql`
                    INSERT INTO users (id,name,email,password)
                    VALUES(${user.id}, ${user.name}, ${user.email}, ${hashedPassword}) ON CONFLICT (id) DO NOTHING;
                `;
      })
    );
    console.log(`Seeded ${insertedUser.length} users`);
    return {
      createTable,
      users: insertedUser,
    };
  } catch (error) {
    console.error("Error seeding users:", error);
    throw error;
  }
}

async function seedShows(client) {
  try {
    //Creating shows table
    const createTable = await client.sql`
            CREATE TABLE IF NOT EXISTS shows(
                show_id VARCHAR(225) PRIMARY KEY,
                name VARCHAR(225) NOT NULL,
                episodes INT NOT NULL,
                imageSrc VARCHAR(225) NOT NULL
            );
        `;
    console.log("Created shows table");

    //Inserting into shows table
    const insertedShows = await Promise.all(
      shows.map(
        (show) =>
          client.sql`
                    INSERT INTO shows (show_id,name,episodes,imageSrc)
                    VALUES(${show.show_id}, ${show.name}, ${show.episodes}, ${show.imageSrc}) ON CONFLICT (show_id) DO UPDATE SET
                    name = EXCLUDED.name,
                    episodes = EXCLUDED.episodes,
                    imageSrc = EXCLUDED.imageSrc;
                `
      )
    );

    console.log(`Seeded ${insertedShows.length} shows`);
    return {
      createTable,
      shows: insertedShows,
    };
  } catch (error) {
    console.error("Error seeding shows:", error);
    throw error;
  }
}

async function seedMovies(client) {
  try {
    //Creating movies table
    const createTable = await client.sql`
            CREATE TABLE IF NOT EXISTS movies(
                movie_id VARCHAR(225) PRIMARY KEY,
                name VARCHAR(225) NOT NULL,
                imageSrc VARCHAR(225) NOT NULL
            );
        `;
    console.log("Created movies table");

    //Inserting into movies table
    const insertedMovies = await Promise.all(
      movies.map(
        (movie) =>
          client.sql`
                    INSERT INTO movies (movie_id,name,imageSrc)
                    VALUES(${movie.movie_id}, ${movie.name}, ${movie.imageSrc}) ON CONFLICT (movie_id) DO UPDATE SET
                    name = EXCLUDED.name,
                    imageSrc = EXCLUDED.imageSrc;;
                `
      )
    );

    console.log(`Seeded ${insertedMovies.length} movies`);
    return {
      createTable,
      movies: insertedMovies,
    };
  } catch (error) {
    console.error("Error seeding movies:", error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();
  await seedUsers(client);
  await seedShows(client);
  await seedMovies(client);
  await client.end();
}
main().catch((err) => {
  console.error(
    "An error occurred while attempting to seed the database:",
    err
  );
});
