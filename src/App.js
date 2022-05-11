import './App.css';

// import composants
import Prenom from './Components/Prenom';
import Nom from './Components/Nom/';

// déclaration des variables
const classe = [
  {
  name: 'NameToto',
  firstname: 'firstnameToto'
},
{
  name: 'NameTata',
  firstname: 'firstnameTata'
},
{
  name: 'NameTiti',
  firstname: 'firstnameTiti'
}
]

function App() {
  return (
    <div className="App">
      Ma classe: 
      <div className='containerClasse'>
      {classe.map(eleve => {
        return (
          <div className='containerEleve'>
            Élève : 
          <Prenom propsFirstname={eleve.firstname}/>
          <Nom propsName={eleve.name}/>
          </div>
        )
      })}
      </div>

    </div>
  );
}

export default App;
