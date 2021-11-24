import logo from './logo.svg';
import './App.css';
import Name from './components/Name/Name'

function App() {
  return (
   <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <main>
        {/* <FruitProvider>
          <p>{json?.name}</p>
        </FruitProvider> */}
        <Name naam={'hello Thuan-Hoa'} />
      </main>
    </div>
  );
}



export default App;


