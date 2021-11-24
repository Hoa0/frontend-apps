import logo from './logo.svg';
import './App.css';

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
        <ComponentFirst naam={'hello test0000000000'} />
      </main>
    </div>
  );
}

const ComponentFirst = ({naam}) => {
  return (
    <h2>{naam}</h2>
  )
}

export default App;


