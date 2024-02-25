"use client";

import { Movies } from "@/app/lib/definations";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ButtonIconRight } from "@/components/ui/ButtonIconRight";
import { ButtonIconLeft } from "@/components/ui/ButtonIconLeft";

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
        <Link href={`/movies/${movieId - 1}`}>
          <ButtonIconLeft />
        </Link>
      )}
      {hasNextMovie && (
        <Link href={`/movies/${movieId + 1}`}>
          <ButtonIconRight />
        </Link>
      )}
    </div>
  );
};

export default Pagination;
