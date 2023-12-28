"use client";

import { Movies } from "@/app/lib/definations";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
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
          href={`/movies/${movieId - 1}`}
          className={` transition mr-auto hover:scale-125 text-blue-500`}
        >
          <FaCaretLeft  className=" h-9  w-9 pl-3 mb-6"/>
        </Link>
      )}
      {hasNextMovie && (
        <Link
          href={`/movies/${movieId + 1}`}
          className={` transition ml-auto hover:scale-125 text-blue-500`}
        >
          <FaCaretRight  className=" h-9  w-9 pr-3 mb-6"/>
        </Link>
      )}
    </div>
  );
};

export default Pagination;
