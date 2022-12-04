import './App.css';

const App = () => {
  // const name = null;
  const name = 'jane';
  // const isNameShowing = true;


  return (
    <div className="App">
  {/* <h1>Hello, {isNameShowing ? name : 'Someone'}!</h1> */}
  <h1>Hello, {2 + 2}!</h1>
  {name ? (
    <>
    {/* test */}
    <h1>{name}</h1>
    </>
  ) : (
    // test
    <>
    <h1>test 4</h1>
    <h2> There is no name</h2>
    </>
  )}
    </div>
  );
}

export default App;
