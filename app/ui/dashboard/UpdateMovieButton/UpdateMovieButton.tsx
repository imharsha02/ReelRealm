import { Movies } from "@/app/lib/definations"
import Link from "next/link"
export default function UpdateMovieButton({id}:{id:number}){
    return (
        <div className="px-5 py-2 hover:bg-sky-400 transition hover:cursor-pointer bg-blue-500 text-white border-none rounded-sm">
            <Link href={`/dashboard/movies/${id}/edit`}>
                Update
            </Link>
        </div>
    )
}