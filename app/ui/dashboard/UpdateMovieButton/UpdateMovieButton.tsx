import Link from "next/link"
export default function UpdateMovieButton({id}:{id:number}){
    return (
        <div>
            <Link href={`/dashboard/movies/${id}/edit`}>
                Update
            </Link>
        </div>
    )
}