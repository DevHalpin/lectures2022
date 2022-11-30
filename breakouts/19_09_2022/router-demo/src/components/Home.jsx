import { useContext } from "react";
import {ThemeContext} from "../App"

const Home = () => {

    const theme = useContext(ThemeContext)

    const ThemedButton = () => {
        return (
            <button style={{background: theme.background, color: theme.foreground}}>
                I am styled by the theme!
            </button>
        )
    }
    return (
      <div>
        <h2>This is the Home component</h2>
        <ThemedButton/>
      </div>
    );
  };
  
  export default Home;
  