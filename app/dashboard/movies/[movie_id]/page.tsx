import React from "react";

import { kanit } from "@/app/ui/fonts";
import Link from "next/link";
import { fetchDetails } from "@/app/lib/utils";
import Image from "next/image";

const IndividualMovie = async ({
  params,
}: {
  params: { movie_id: number };
}) => {
  const movieDetails = await fetchDetails(params.movie_id);

  return (
    <>
      {movieDetails.map((detail) => {
        const movieId = Number(detail.movie_id);
        return (
          <div key={movieId} className="my-5 mx-auto w-max space-y-3">
            <Image
              src={detail.imageSrc}
              alt=""
              className="rounded-lg p-3 bg-slate-100 border-none"
              height={600}
              width={600}
            />
            <div className="w-max mx-auto">
              <div className="flex gap-1 items-center">
                <h3 className={`text-xl ${kanit.className}`}>Movie</h3>
                <p className="text-lg">{detail.movie_name}</p>
              </div>
              <div className="flex gap-1 items-center">
                <h3 className={`text-xl ${kanit.className}`}>Lead role By</h3>
                <p className="text-lg">{detail.leadRoleBy}</p>
              </div>
              <div className="flex gap-1 items-center">
                <h3 className={`text-xl ${kanit.className}`}>Release date</h3>
                <p className="text-lg">{detail.release_date}</p>
              </div>
            </div>
            <div className="flex w-full justify-between mt-3">
              <Link
                href={`/dashboard/movies/${movieId - 1}`}
                className={`bg-blue-500 rounded font-bold transition hover:bg-blue-400 text-white px-5 py-1`}
              >
                Prev
              </Link>
              <Link
                href={`/dashboard/movies/${movieId + 1}`}
                className="bg-blue-500 rounded font-bold transition hover:bg-blue-400 text-white px-5 py-1"
              >
                Next
              </Link>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default IndividualMovie;
