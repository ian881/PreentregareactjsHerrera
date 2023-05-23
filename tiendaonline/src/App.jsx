

import './App.css'
import NavScrollExample from './components/NavBar/NavBar';
import itemlistcontainer from './components/Itemlistcontainer/itemlistcontainer';


  function App() {
    return (
        <div className="App">
        
          <NavScrollExample></NavScrollExample>

          <itemlistcontainer greeting="TiendaOnline">TiendaOnline</itemlistcontainer>
         
        </div>
     
    );
}
 



export default App
