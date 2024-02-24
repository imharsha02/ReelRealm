"use client";

import { Movies } from "@/app/lib/definations";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import Link from "next/link";
import { Button } from "@/components/ui/button";

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
        <Button asChild>

        <Link
          href={`/movies/${movieId - 1}`}
        >
          <FaCaretLeft  className=" h-9  w-9"/>
        </Link>
        </Button>
      )}
      {hasNextMovie && (
        <Button asChild>

        <Link
          href={`/movies/${movieId + 1}`}
        >
          <FaCaretRight  className=" h-9  w-9"/>
        </Link>
        </Button>
      )}
    </div>
  );
};

export default Pagination;
