import { Movies } from "@/app/lib/definations"
import Link from "next/link"
export default function UpdateMovieButton({id}:{id:number}){
    return (
        <div className="px-5 py-2 bg-blue-400 text-white border-none rounded-sm">
            <Link href={`/dashboard/movies/${id}/edit`}>
                Update
            </Link>
        </div>
    )
}