const title = "bonjour les gens";
const todos = ["Présenter react", "Présenter jsx", "Créer des composants"];

function App() {
  const handleClick = (e) => {
    console.log(e);
    alert("j'ai cliqué sur le titre");
  };

  return (
    <>
      <h1
        id="title"
        className="title"
        onClick={handleClick}
        style={{ color: "red", backgroundColor: "blue" }}
      >
        {title}
      </h1>
      <input type="text" />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque veritatis
        nesciunt optio voluptate assumenda odio dolorum odit. Sapiente, corrupti
        possimus, amet voluptates ipsum perferendis voluptatibus veniam, natus
        ipsam nihil aut?
      </p>
      <ul>
        {todos.map(todo => (
          <li key={todo}>{todo}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
