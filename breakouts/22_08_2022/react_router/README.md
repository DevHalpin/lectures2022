## React Router Breakout

[Code](https://github.com/DevHalpin/lectures2022/tree/main/breakouts/22_08_2022/react_router)  
[Video](https://vimeo.com/766279062/3884bc3e17)  

### Main Components
* `<BrowserRouter>`: Main container that wraps all children involved in routing/rendering (often aliased as `Router`)
* `<Link>`: The component responsible for updating the current url
* `<Route>`: Url-matcher for conditionally rendering components based on the current url
* `<Routes>`: Wrapper for the `Route`'s which will only allow one route to match
* `<Navigate>`: Can be used to "redirect" a user

### Custom Hooks
* `useParams`: Allows us to access the dynamic parameters in the current url (similar to `req.params` in Express)
* `useNavigate`: Allows us to programmatically move the user to a different endpoint