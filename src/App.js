import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';


function App() {
  return (
    <div className="App">
      {/* <Greet name="Vishwas" work="Poet"/> */}
      {/* <Greet name="Akash" work="Writter"/> */}
      {/* <Greet name="Rabiya" work="Coder"/> */}
      {/* <Welcome/> */}
      {/* <Hello/> */}
      {/* <Message/> */}
      <Counter/>
    </div>
  );
}

export default App;
