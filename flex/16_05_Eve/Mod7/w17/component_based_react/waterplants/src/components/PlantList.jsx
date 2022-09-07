import PlantListItem from "./PlantListItem";
import { listOfPlants } from "../data/plants";

export default function PlantList() {
  

  const plantList = listOfPlants.map((plant) => {
    return <PlantListItem key={plant.id} {...plant} />;
  });

  return <>{plantList}</>;
}
