import { useState } from "react";

export default function SampleControlledComponent() {
  const [value, setValue] = useState("");
  
  const handleChange = (event) => {
    console.log(event)
    setValue(event.target.value);
  };

  return (
    <label>
      My Controlled Component:
      <h1>Current State is: {value}</h1>
      <input type="text" value={value} onChange={handleChange} />
    </label>
  );
}
