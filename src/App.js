import "./App.css";

// import composants
import Prenom from "./Components/Prenom";
import Nom from "./Components/Nom/";
import { useState } from "react";

// déclaration des variables
const classeInitiale = [
  {
    name: "NameToto",
    firstname: "firstnameToto",
  },
  {
    name: "NameTata",
    firstname: "firstnameTata",
  },
  {
    name: "NameTiti",
    firstname: "firstnameTiti",
  },
];

function App() {
  const [classe, setClasse] = useState(classeInitiale);
  const [newStudentFirstname, setNewStudentFirstname] = useState("");
  const [newStudentName, setNewStudentName] = useState("");

  return (
    <div className="App">
      Ma classe:
      <div className="containerClasse">
        {
        // On boucle sur le state classe pour récupérer tous les élèves 
        // grâce à un map
        classe.map((eleve, index) => {
          // je retourne les élève un à un
          return (
            <div key={index} className="containerEleve">
              Élève :
              <Prenom propsFirstname={eleve.firstname} />
              <Nom propsName={eleve.name} />
            </div>
          );
        })}
      </div>
      <div>
        Création nouvel élève:
        <div className="containerEleve">
          <div className="styleFirstName">
            <label>Prénom</label>
            <input
              placeholder="entrez un prénom"
              value={newStudentFirstname}
              onChange={(event) => {
                // je modifie newStudentFirstname grâce à mon setNewStudentFirstname 
                setNewStudentFirstname(event.target.value);
              }}
            />
            <div>{newStudentFirstname}</div>
          </div>
          <div className="styleName">
            <label>Nom</label>
            <input
              placeholder="entrez un nom"
              value={newStudentName}
              onChange={(event) => {
                // je modifie newStudentName grâce à mon setNewStudentName 
                setNewStudentName(event.target.value);
              }}
            />
            <div>{newStudentName}</div>
          </div>
          <button
            onClick={() => {
              //1 - On fait une VRAIE copie de classe
              const classCopy = [...classe];
              //2 - On ajoute un élèvement à classe
              // grâce aux states newStudentName & newStudentFirstname
              classCopy.push({
                name: newStudentName,
                firstname: newStudentFirstname,
              });
              //3 - Je mets à jour ma classe avec la copie qui contient
              //le nouvel élève
              setClasse(classCopy);
              //4- Je remets à 0 newStudentFirstname & newStudentName
              setNewStudentFirstname("");
              setNewStudentName("");
            }}
          >
            Ajouter un nouvel élève
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
