function Mood(props) {
   return(<section>
        <h2>My name is {props.name}</h2>
        {props.mood && props.mood.toLowerCase() === "happy" &&
            <p>I am feeling very happy about boot camp!</p>}
        {props.mood && props.mood.toLowerCase() === "sad" &&
            <p>Today isn't a great day!</p>}
        {props.mood && props.mood.toLowerCase() === "mad" &&
            <p>I am very frustrated with an activity!</p>}
        {!['happy','sad','mad'].includes(props.mood && props.mood.toLowerCase()) && 
            <p>I don't know how I'm feeling...</p>}
    </section>)
}

export default Mood;