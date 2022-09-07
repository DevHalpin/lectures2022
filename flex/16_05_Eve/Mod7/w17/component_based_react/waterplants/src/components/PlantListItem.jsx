import {useState} from 'react'

export default function PlantListItem(props) {
    const {name, lastWateredDate, wateringInterval} = props;
    const [watered, setWatered] = useState(false)

    const handleClick = () => {
        setWatered(!watered);
        console.log("Watered!")
      };
    return(
        <div>
            <h1>Name:{name}</h1>
            <h2>Last Watered: {lastWateredDate}</h2>
            <h2>Watering Interval:{wateringInterval}</h2>
            {!watered && <button onClick={handleClick}>Water</button>}
        </div>
    )
}