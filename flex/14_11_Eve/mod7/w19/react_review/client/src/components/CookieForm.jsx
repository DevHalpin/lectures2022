import axios from "axios";
import { useState } from "react";

const CookieForm = (props) => {
  const [name, setName] = useState("");
  const [calories, setCalories] = useState("");

  const handleCalorieChange = (e) => {
    setCalories(e.target.value);
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/cookies", { name, calories })
      .then((data) => {
        console.log(data)
        props.setCookieState((prev) => [...prev, data.data]);
      });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={handleNameChange}
        />
        <br />
        <input
          type="text"
          name="calories"
          placeholder="Calories"
          value={calories}
          onChange={handleCalorieChange}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CookieForm;
