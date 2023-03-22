import PlantListItem from "../components/PlantListItem";
import {storiesOf} from '@storybook/react'

const samplePlant = {
    id: "b",
    name: "Rose",
    lastWateredDate: "2022-09-06",
    wateringInterval: 1

}

storiesOf("PlantListItem", module)
.add("With Proper Props", () => <PlantListItem {...samplePlant} />)
.add("Without Proper Props", () => <PlantListItem/>)