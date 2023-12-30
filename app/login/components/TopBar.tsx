import { BiCameraMovie } from "react-icons/bi"
import { lato } from '@/app/ui/fonts'
import Link from "next/link"

const TopBar = () => {
  return (
    <div className={`h-20 ${lato.className} text-center bg-blue-700 text-3xl text-white`}>
      <Link href = "/" className="flex items-center gap-3 p-10 ">
      <p>ReelRealm</p>
      <BiCameraMovie className="w-10 h-10"/>
      </Link>
    </div>
  )
}

export default TopBar
