import CookieListItem from "./CookieListItem";

const CookieList = (props) => {

    const cookieListItemArray = props.cookies.map(cookie => {
        return (
            <CookieListItem key={cookie.id} {...cookie} />
        )
    })

    return (
        <div>
            <h2>This is the List Component</h2>
            {cookieListItemArray}
        </div>
    )
}

export default CookieList;