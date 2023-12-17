"use client";
import { useState, useEffect } from 'react';
import { Movies } from "@/app/lib/definations";
import { fetchMoviesWithNoDetails } from "@/app/lib/utils";
import AddDetails from "@/app/ui/movies/components/AddDetails";
import { sql } from '@vercel/postgres';

const DetailsPage = () => {
  const [moviesWithNoDetails, setMoviesWithNoDetails] = useState<Movies[]>([]);

  useEffect(() => {
    const getMovieWithNoDetails = async () => {
      const movies = await fetchMoviesWithNoDetails();
      setMoviesWithNoDetails(movies);
    };
    getMovieWithNoDetails();
  }, []);

  return (
    <div>
      {moviesWithNoDetails.map((movie) => (
        <AddDetails movie={movie} key={movie.movie_id} />
      ))}
    </div>
  );
};

export default DetailsPage;
