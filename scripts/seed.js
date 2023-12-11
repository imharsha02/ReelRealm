const { db } = require("@vercel/postgres");
const {
  users,
  shows,
  movies,
  sequels,
  details,
} = require("../app/lib/placeholder-shows.ts");
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

async function seedSequels(client) {
  try {
    //Creating movies table
    const createTable = await client.sql`
            CREATE TABLE IF NOT EXISTS sequels(
                sequel_id VARCHAR(225) PRIMARY KEY,
                sequel_name VARCHAR(225) NOT NULL,
                imageSrc VARCHAR(225) NOT NULL
            )
        `;
    console.log("Created sequels table");

    //Inserting into sequels table
    const insertedSequels = await Promise.all(
      sequels.map(
        (sequel) =>
          client.sql`
                    INSERT INTO sequels (sequel_id,sequel_name,imageSrc)
                    VALUES(${sequel.sequel_id}, ${sequel.sequel_name}, ${sequel.imageSrc}) ON CONFLICT (sequel_id) DO UPDATE SET
                    sequel_name = EXCLUDED.sequel_name,
                    imageSrc = EXCLUDED.imageSrc
                `
      )
    );

    console.log(`Seeded ${insertedSequels.length} sequels`);
    return {
      createTable,
      sequels: insertedSequels,
    };
  } catch (error) {
    console.error("Error seeding sequels:", error);
    throw error;
  }
}

async function seedDetails(client) {
  try {
    const createTable = await client.sql`
            CREATE TABLE IF NOT EXISTS details(
                movie_id INT PRIMARY KEY,
                movie_name VARCHAR(225) NOT NULL,
                leadRoleBy VARCHAR(225) NOT NULL,
                release_date VARCHAR(225) NOT NULL,
                imageSrc VARCHAR(225) NOT NULL
            )
        `;
    console.log("Created DETAILS table");
    const insertedDetails = await Promise.all(
      details.map(
        (detail) =>
          client.sql`
                  INSERT INTO details (movie_id,movie_name,leadRoleBy,release_date,imageSrc)
                  VALUES(${detail.movie_id}, ${detail.movie_name}, ${detail.leadRoleBy}, ${detail.release_date} ,${detail.imageSrc}) ON CONFLICT (movie_id) DO UPDATE SET
                  movie_name = EXCLUDED.movie_name,
                  leadRoleBy = EXCLUDED.leadRoleBy,
                  release_date = EXCLUDED.release_date,
                  imageSrc = EXCLUDED.imageSrc
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
