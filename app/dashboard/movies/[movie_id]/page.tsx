import React from "react";
import { kanit } from "@/app/ui/fonts";
import { fetchDetails } from "@/app/lib/utils";
import Image from "next/image";

const IndividualMovie = async ({
  params,
}: {
  params: { movie_id: string };
}) => {
  const movieDetails = await fetchDetails(params.movie_id);
  console.log(typeof(movieDetails[0].leadRoleBy));
  
  return (
    <>
      {movieDetails.map((detail) => {
        return (
          <div key={detail.movie_id}>
            <Image src={detail.imageSrc} alt="" height={30} width={30} />
            <div className="flex gap-1">
              <h3 className={kanit.className}>Movie</h3>
              <p>{detail.movie_name}</p>
            </div>
            <div className="flex gap-1">
              <h3 className={kanit.className}>Actors</h3>
              <p>{detail.leadRoleBy}</p>
            </div>
            <div className="flex gap-1">
              <h3 className={kanit.className}>Release date</h3>
              <p>{detail.release_date}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default IndividualMovie;
