const { db } = require("@vercel/postgres");
const {
  users,
  movies,
  details,
} = require("../app/lib/placeholder-shows.ts");
const bcrypt = require("bcrypt");
async function seedUsers(client) {
  try {
    // await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Creating users table
    const createTable = await client.sql`

    DROP TABLE IF EXISTS users;

            CREATE TABLE IF NOT EXISTS users(
                id SERIAL PRIMARY KEY,
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
                    INSERT INTO users (name,email,password)
                    VALUES(${user.name}, ${user.email}, ${hashedPassword});
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
    await client.sql`DROP TABLE IF EXISTS shows;`;

  } catch (error) {
    console.error("Error deleting shows:", error);
    throw error;
  }
}

async function seedMovies(client) {
  try {
    //Creating movies table
    const createTable = await client.sql`
    DROP TABLE IF EXISTS movies;

    CREATE TABLE movies (
      movie_id SERIAL PRIMARY KEY,
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
                    INSERT INTO movies (name,imageSrc)
                    VALUES(${movie.name}, ${movie.imageSrc})
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

async function seedSequels(client) {
  client.sql`
    DROP TABLE IF EXISTS sequels;
    `;
}
async function seedDetails(client) {
  try {
    const createTable = await client.sql`
            DROP TABLE IF EXISTS details;
            CREATE TABLE IF NOT EXISTS details(
                movie_id SERIAL PRIMARY KEY,
                movie_name VARCHAR(225) NOT NULL,
                lead_role_by VARCHAR(225) NOT NULL,
                release_date VARCHAR(225) NOT NULL,
                imageSrc VARCHAR(225) NOT NULL
            )
        `;
    console.log("Created DETAILS table");
    const insertedDetails = await Promise.all(
      details.map(
        (detail) =>
          client.sql`
                  INSERT INTO details (movie_name,lead_role_by,release_date,imageSrc)
                  VALUES(${detail.movie_name}, ${detail.lead_role_by}, ${detail.release_date} ,${detail.imageSrc})
              `
      )
    );
    console.log(`Seeded details of ${insertedDetails.length} movies`);
    return {
      createTable,
      details: insertedDetails,
    };
  } catch (error) {
    console.log("Error seeding details table", error);
  }
}

async function main() {
  const client = await db.connect();
  await seedUsers(client);
  await seedShows(client);
  await seedMovies(client);
  await seedSequels(client);
  await seedDetails(client);
  await client.end();
}
main().catch((err) => {
  console.error(
    "An error occurred while attempting to seed the database:",
    err
  );
});
