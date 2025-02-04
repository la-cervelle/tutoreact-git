import { useState } from "react";

const titleText = "Bonjour les gens";
const todos = [
  "✔ Présenter React",
  "✔ Présenter JSX",
  "✔ Créer des composants",
  "✔ Gérer l'état avec useState",
  "✔ Manipuler les événements (onClick, onChange, etc.)",
];

// Les Hooks en React permettent d'utiliser l'état et d'autres fonctionnalités de React sans écrire de classes.
// Ils facilitent la gestion du cycle de vie et de la logique réutilisable dans les composants fonctionnels.

// En React, l'état (state) est une donnée qui peut changer au cours de la vie d'un composant.
// Il permet aux composants de réagir aux interactions de l'utilisateur et de modifier l'interface dynamiquement.

function App() {
  const [person, setPerson] = useState({
    firstName: "John",
    lastName: "Doe",
    age: 18, // `age` est maintenant un nombre
  });

  const [count, setCount] = useState(0);
  const [firstName, setFirstName] = useState("John Doe"); // Déplacé dans App()

  const incrementAge = () => {
    setPerson({ ...person, age: person.age + 1 });
  };

  const incrementCount = () => {
    setCount(count + 1);
  };

  const handleChange = (e) => {
    setFirstName(e.target.value);
  };

  const reset = () => {
    setFirstName("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(new FormData(e.target));
  };

  const handleChanges = (e) => {
    setFirstName(e.target.value);
  };

  return (
    <>
      <h1>{titleText}</h1>

      <h2>Liste des tâches :</h2>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>

      <p>
        Âge de {person.firstName} : {person.age} ans
      </p>
      <button onClick={incrementAge}>Gagner une année</button>

      <p>Compteur : {count}</p>
      <button onClick={incrementCount}>Incrémenter</button>

      <h2>Formulaire</h2>
      <p>¤ Cas d'un formulaire controlé par React</p>

      {/* dans cet cas react retourne différentes valeurs saisies au cours 
          c'est à dire que dans le cas où on veut que l'interface affiche 
          la valeur de notre input il est le plus apte 
      */}
      <form>
        <input
          type="text"
          name="firstName"
          value={firstName}
          onChange={handleChange}
        />
        <button type="button" onClick={reset}>
          Reset
        </button>
        <p>Nom saisi : {firstName}</p>
      </form>

      <p>¤ Cas d'un formulaire non controlé par React</p>
      {/* si on veut taper de manière libre et qu'on veut juste la valeur 
      de ce qu'on a soumis alors le champ non controlé est le meilleur */}
      <form onSubmit={handleSubmit}>
        <input type="text" name="firstname" />
        <button>Envoyer </button> <br />
      </form>
    </>
  );
}

export default App;
