import "./App.css";


const MyButton = () => {
  return (
    <button>My Button</button>
  )
}
function App() {

  const user = {
    name: 'Hedy Lamarr',
    surname: 'true',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
  };

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
      <ul>{listItems}
      </ul>
    </>
  );
}

export default App
