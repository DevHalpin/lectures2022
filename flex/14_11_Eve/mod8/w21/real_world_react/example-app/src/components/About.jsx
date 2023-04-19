import {useTheme} from '../contexts/useTheme'

const About = () => {
    const {themeToggle} = useTheme();
    
    return (
        <div className={`wrapper ${themeToggle ? "dark" : "light"}`}>
        <h2>This is About Component</h2>
        </div>
    )
}

export default About