
import './App.css';
import NavScrollExample from './components/Navbar';
import TagTypesExample from './components/Buttonbar';
//import Cards from './components/Content';// used export function instead of defualt export so its useless now
import { Cards, Contenttabs } from './components/Content';
import Cardbox from './components/Cardbox';


function App() {
  return (
    <div className="App">
      <NavScrollExample />
      <TagTypesExample />
      <Cards />
      <Contenttabs />
      <Cardbox />

    </div>
  );
}

export default App;
