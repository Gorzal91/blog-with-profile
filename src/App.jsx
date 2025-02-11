import "./App.css";
import MyButton from "./components/MyButton";
import { useState } from "react";



function App() {

  const [count, setCount] = useState(0);

  const handleClick = () => {
      setCount(count + 1)
    }


  const products = [
    { title: 'Cabbage', isFruit: 1, id: 1 },
    { title: 'Garlic', isFruit: false, id: 2 },
    { title: 'Apple', isFruit: 0, id: 3 },
  ];




  const listItems = products.map(product =>
    <li key={product.id}
        style={{
        color: product.isFruit ? 'magenta' : 'darkgreen'
        }}>
      {product.title}
    </li>
  );


  return (
    <>
      <ul>{listItems}</ul>

      <MyButton count={count} onClick={handleClick}/>
      <MyButton count={count} onClick={handleClick}/>

    </>
  );
}

export default App
