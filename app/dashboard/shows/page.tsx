import Card from "@/app/ui/dashboard/Cards/Cards"
import { fetchShows } from "@/app/lib/utils"
const ShowsPage = async () => {
  const shows = await fetchShows();
  return (
    <div className="flex flex-wrap">
      {
        shows.map((show) => {
          return (
            <div key={show.show_id} className="mr-4 mb-4">
              <Card name={show.name} imageSrc={show.imageSrc} episodes={show.episodes}/>
            </div>
          )
        })
      }
    </div>
  )
}

export default ShowsPage
