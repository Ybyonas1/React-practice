import './App.css';

const Person =(props) => {
return (
  <>
  <h1>name: {props.name}</h1>
  <h2>Last Name: {props.LastName}</h2>
  <h2>age: {props.age} </h2>
  </>
)
}

const App = () => {

  return (
    <div className="App">
 <Person name={'John'} LastName={'Doe'} age={25}/>
 <Person name="Jane" age={2 + 2} LastName="Hendrix" />
 <Person name={'JBobby'} LastName={'Doesit'} age={35}/>
 <Person name="Malard" age={2 + 90} LastName="Jenkins" />

     </div>
  );
}

export default App;
