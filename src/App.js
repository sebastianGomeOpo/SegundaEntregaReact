import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBarBT } from './components/NavBarBT/NavBarBT';
import {BrowserRouter, Route,Routes} from "react-router-dom"
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
function App() {
  return (
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
        
  );
}


export default App;
