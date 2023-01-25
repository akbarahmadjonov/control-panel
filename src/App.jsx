import { Unresolved} from './Components/UnResolved'
import { Tasks } from './Components/Tasks'
import { Header } from './Components/Header';
import { OverwiewHeader } from './Components/Overwiew/OverwiewHeader';
import { OverwiewCard } from './Components/Overwiew/OverwiewCard';
import {OverwiewToday} from "./Components/Overwiew/OverwiewToday";

function App() {
  return <div className="App">
    <Header/>
    <OverwiewHeader/>
    <OverwiewCard/>
    <OverwiewToday/>
  <div className='d-flex OverwiewTop justify-content-between mt-5'>
  <Unresolved/>
    <Tasks/>
  </div>
  </div>;
}

export default App;
