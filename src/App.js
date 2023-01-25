import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBarBT } from './components/NavBarBT/NavBarBT';
import {BrowserRouter, Route,Routes} from "react-router-dom"
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
// 1. Importar el context
// import { createContext } from 'react';

import { CartContextProvider } from './storage/CartContext';

// 2. Crear el context
// export const userContext = createContext({user:"anonimo"});



function App() {

  return (
    // 4. Usar el Provider
    <CartContextProvider value ={{user:"CoderHouse"}}>
      <BrowserRouter> 
        <NavBarBT
          logo="/assets/img/stickerStunning.webp"
        />
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/item/:itemid" element={<ItemDetailContainer/>}/>
          <Route path="/category/:categoryid" element={<ItemListContainer />} />
          <Route path="*" element={<h1>404 Not Found</h1>}/>
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
        
  );
}


export default App;
