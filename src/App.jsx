import { Unresolved} from './Components/UnResolved'
import { Tasks } from './Components/Tasks'
import { Header } from './Components/Header';
import { OverwiewHeader } from './Components/Overwiew/OverwiewHeader';

function App() {
  return <div className="App">
    <Header/>
    <OverwiewHeader/>
    <Unresolved/>
    <Tasks/>
  </div>;
}

export default App;
