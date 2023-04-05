const CookieListItem = (props) => {
    return (
        <div>
            <h2> Name: {props.name}</h2>
            <p> Calories: {props.calories}</p>
        </div>
    )
}

export default CookieListItem;