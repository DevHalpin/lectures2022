import Counter from "./components/Counter";
import Hello from "./components/Hello"
import Mood from "./components/Mood"
import ToDoList from "./components/ToDoList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Hello name="David"/>
        <Hello name="Meg"/> */}
        <Mood name="David" mood="happy" />
        <Mood name="Andrew" mood="sad" />
        <Mood name="Bob" mood="mad" />
        <Mood name="Dog" mood="other" />
        <Counter/>
        <ToDoList/>
      </header>
    </div>
  );
}

export default App;
