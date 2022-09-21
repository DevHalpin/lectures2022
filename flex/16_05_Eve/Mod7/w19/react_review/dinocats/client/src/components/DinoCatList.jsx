import DinoCatListItem from "./DinoCatListItem";

const DinoCatList = (props) => {
  console.log(props);

//   const dinoCatArray = [];

//  For Loop

//   for (const dinoCat of Object.values(props.dinoCats)) {
//     console.log(dinoCat)
//     dinoCatArray.push(<DinoCatListItem {...dinoCat}/>)

//   }

// Map
  const mappedDinoCats = props.dinoCats.map((dinoCat) => {
    return (
        <DinoCatListItem key={dinoCat.id} {...dinoCat}/>
    )
  })

  return (
    <div>
        <h2>All the Amazing Dino Cats!</h2>
        {mappedDinoCats}
    </div>
  )
};

export default DinoCatList
