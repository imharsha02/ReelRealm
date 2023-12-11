import Card from "@/app/ui/dashboard/Cards/Cards";
import { fetchSequels } from "@/app/lib/utils";
const SequelPage = async () => {
  const sequels = await fetchSequels();
  console.log(sequels);
  return (
    <div className="flex flex-wrap gap-20 mt-5">
      {
        sequels.map((sequel) => {
          return (
            <Card name={sequel.sequel_name} imageSrc={sequel.imageSrc} key={sequel.sequel_id}/>
          )
        })
      }
    </div>
  );
};

export default SequelPage;
