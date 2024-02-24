import { Movies } from "@/app/lib/definations"
import { Button } from "@/components/ui/button"
import Link from "next/link"
export default function UpdateMovieButton({id}:{id:number}){
    return (
        <Button asChild>
            <Link href={`/movies/${id}/edit`}>
                Update
            </Link>
        </Button>
    )
}