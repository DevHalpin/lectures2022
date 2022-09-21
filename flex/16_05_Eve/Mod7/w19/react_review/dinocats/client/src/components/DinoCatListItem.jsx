import './DinoCatListItem.scss'
// fangLength: "5cm",
// verticalLeap: "10m",
// diet: "Dino Mice",
// earSize: "50cm",
// tailLength: "1m",


const DinoCatListItem = (props) =>  {
    return (
        <div className='dinoCat'>
            <h2>Name: {props.name}</h2>
            <p>Fang Length: {props.fangLength}</p>
            <p>Vertical Leap: {props.verticalLeap}</p>
            <p>Diet: {props.diet}</p>
            <p>Ear Size: {props.earSize}</p>
            <p>Tail Length: {props.tailLength}</p>
        </div>
    );
  }

export default DinoCatListItem