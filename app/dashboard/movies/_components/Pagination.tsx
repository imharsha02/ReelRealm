"use client";

import { Movies } from "@/app/lib/definations";
import Link from "next/link";

const Pagination = ({
  movieId,
  allMovies,
}: {
  movieId: number;
  allMovies: Movies[];
}) => {
  const numberOfMovies = allMovies.length;
  const hasPrevMovie = movieId > 1;
  const hasNextMovie = movieId < numberOfMovies;

  return (
    <div className="flex w-full justify-between mt-3">
      {hasPrevMovie && (
        <Link
          href={`/dashboard/movies/${movieId - 1}`}
          className={`bg-blue-500 rounded font-bold transition mr-auto hover:bg-blue-400 text-white px-5 py-1`}
        >
          Prev
        </Link>
      )}
      {hasNextMovie && (
        <Link
          href={`/dashboard/movies/${movieId + 1}`}
          className={`bg-blue-500 rounded font-bold transition ml-auto hover:bg-blue-400 text-white px-5 py-1`}
        >
          Next
        </Link>
      )}
    </div>
  );
};

export default Pagination;
