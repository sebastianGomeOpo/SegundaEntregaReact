import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBarBT } from './components/NavBarBT/NavBarBT';


function App() {
  return (
    <>
      <NavBarBT
      logo="/assets/img/stickerStunning.webp"
      />

      <ItemListContainer
      greeting="Hola, bienvenido a Stunning"
      />


    </>
  );
}


export default App;
