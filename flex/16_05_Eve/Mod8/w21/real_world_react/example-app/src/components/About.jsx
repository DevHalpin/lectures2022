import {useTheme} from '../contexts/useTheme'

function About(props) {
    const { themeToggle } = useTheme();

    return(
        <div className={`wrapper ${themeToggle ? "dark" : "light"}`}>
            <h1>About 👋</h1>
            <p>Hello from About!</p>
        </div>
    )
}

export default About