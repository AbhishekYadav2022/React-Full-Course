import { useState } from "react";

export default function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <>
      <button onClick={handleClick}>Clicked {count} times</button>

      <h2>Counters that update separately</h2>
      <Button />
      <br />
      <Button />
    </>
  );
}

function Button() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count+1);
    }

    return(
        <button onClick={handleClick}>Clicked {count} times</button>
    )
}