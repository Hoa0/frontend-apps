import logo from './logo.svg';
import './App.css';
import Name from './components/Name/Name'
import {FruitProvider} from './contexts/FruitContext';
import List from './components/List/List' 

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

          <FruitProvider>
            <List />
        </FruitProvider>
        <Name naam={'hello Thuan-Hoa le'} />
      </main>
    </div>
  );
}



export default App;


