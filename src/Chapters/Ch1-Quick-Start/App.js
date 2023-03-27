// Creating and nesting components
function MyButton() {
  return <button>I'm a button</button>;
}

function handleClick() {
  alert("You clicked me!");
}

export default function App() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
