import styled from "styled-components";
import { useTheme} from '../contexts/useTheme'

const Paragraph = styled.p`
    color: pink;
    font-size: 24px;
    text-decoration: underline;
`

const Welcome = () => {
    const { themeToggle} = useTheme();
    return (
        <div className={`wrapper ${themeToggle ? "dark" : "light"} `}>
            <Paragraph>I look sooooo good!</Paragraph>
            <h1>Welcome 👋</h1>
            <p>Hello from Welcome!</p>
        </div>
    )
}

export default Welcome;