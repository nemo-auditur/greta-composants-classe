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
          // En plus, on ajout le paramètre index, afin d'avoir
          // l'index de chaque élève dans le tableau.
          classe.map((eleve, index) => {
            // je retourne les élève un à un
            return (
              <div key={index} className="containerEleve">
                <div
                  className="eraserCross"
                  onClick={() => {
                    // 1- On ne peut pas modifier le state directement
                    // Il faut donc obligatoirement en faire une VRAIE copie
                    // nb: on ne peut pas faire const classeCopy = classe !
                    const classeCopy = [...classe];

                    // 2- On opère notre modification sur la copie:
                    // en l'occurence, on enlève l'élève voulu
                    classeCopy.splice(index, 1);
                    // 3- On met à jour notre state classe avec la copie
                    // modifiée
                    setClasse(classeCopy);
                  }}
                >
                  x
                </div>
                Élève :
                <Prenom propsFirstname={eleve.firstname} />
                <Nom propsName={eleve.name} />
              </div>
            );
          })
        }
      </div>
      Outil de création d'un nouvel élève:
      <div className="containerEleve">
        <div className="styleFirstNameInput">
          <div className="inputContainer">
            <label className="inputLabel">Prénom</label>
            <input
              type="text"
              placeholder="Entrez un prénom"
              value={newStudentFirstname}
              onChange={(event) => {
                // je modifie newStudentFirstname grâce à mon setNewStudentFirstname
                setNewStudentFirstname(event.target.value);
              }}
            />
          </div>
          <div>{newStudentFirstname}</div>
        </div>
        <div className="styleNameInput">
          <div className="inputContainer">
            <label className="inputLabel">Nom</label>
            <input
              type="text"
              placeholder="Entrez un nom"
              value={newStudentName}
              onChange={(event) => {
                // je modifie newStudentName grâce à mon setNewStudentName
                setNewStudentName(event.target.value);
              }}
            />
          </div>
          <div>{newStudentName}</div>
        </div>
        <button
          onClick={() => {
            //1 - On fait une VRAIE copie de classe
            //car on ne peut pas modifier un state directement
            // nb: on ne peut pas faire const classeCopy = classe !
            const classCopy = [...classe];
            //2 - On ajoute un élèvement à classe
            // grâce aux states newStudentName & newStudentFirstname
            classCopy.push({
              name: newStudentName,
              firstname: newStudentFirstname,
            });
            //3 - Je mets à jour mon state classe avec la copie qui contient
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
  );
}

export default App;
