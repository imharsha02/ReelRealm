import Card from "@/app/ui/dashboard/Cards"
import { fetchShows } from "@/app/lib/utils"
const ShowsPage = async () => {
  const shows = await fetchShows();
  return (
    <div>
      {
        shows.map((show) => {
          return (
            <Card name={show.name} imageSrc={show.imageSrc} key={show.show_id}/>
          )
        })
      }
    </div>
  )
}

export default ShowsPage
