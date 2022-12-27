import './App.css';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { NavBar } from './components/NavBar/NavBar';

// Los componentes siempre se escriben la primera letra en mayusculas
// En React se usa mucho camelCase


function App() {
  return (
    <>
      <NavBar
      logo="/assets/img/stickerStunning.webp"
      />

      <ItemListContainer
      greeting="Hola, bienvenido a Stunning"
      />


    </>
  );
}


export default App;
