

import './App.css'
import NavScrollExample from './components/NavBar/NavBar';
import itemlistcontainer from './components/Itemlistcontainer/itemlistcontainer';
import ItemCount from './components/ItemCount/ItemCount';

  function App() {
    return (
        <div className="App">
        
          <NavScrollExample></NavScrollExample>

          <itemlistcontainer greeting="TiendaOnline">TiendaOnline</itemlistcontainer>
          <ItemCount initial={1} stock={10} onAdd={(quantity)=> console.log ("cantidad agregada",quantity)}></ItemCount>
         
        </div>
     
    );
}
 



export default App
