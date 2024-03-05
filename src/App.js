import './App.css';
import HelloWorld from './components/HelloWorld'
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';


function App() {
  return (
    <div className="App">
      <h1>Testado Css </h1>
      <Frase/>
      <HelloWorld/>
      <SayMyName nome="Larissa"/>
      <Pessoa nome="Larissa" 
      idade="17" 
      profissao="Programadora"/>
      <List/>

    </div>
  );
}

export default App;
