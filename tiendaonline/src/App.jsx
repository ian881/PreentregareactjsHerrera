

import './App.css'
import NavScrollExample from './components/NavBar/NavBar';
import Itemlistcontainer from './components/Itemlistcontainer/itemlistcontainer';
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailCountainer/ItemDetailContainer';

  function App() {
    return (
        <div className="App">
        
          <NavScrollExample></NavScrollExample>

          <Itemlistcontainer greeting="TiendaOnline">TiendaOnline</Itemlistcontainer>
          <ItemDetailContainer></ItemDetailContainer>       
        </div>
     
    );
}
 



export default App
