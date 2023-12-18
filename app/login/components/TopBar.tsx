import { BiCameraMovie } from "react-icons/bi"
import { lato } from '@/app/ui/fonts'

const TopBar = () => {
  return (
    <div className={`h-20 ${lato.className} text-center gap-3 px-10 bg-blue-700 text-3xl flex items-center text-white`}>
      <p>Shows-I-Watch</p>
      <BiCameraMovie className="w-10 h-10"/>
    </div>
  )
}

export default TopBar
