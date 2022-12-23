import './App.css';
import Examples from './components/Examples';
import Button, { ButtonChild } from './components/Button/Button';
import { Flexwrapper } from './components/FlexWrapper/FlexWrapper';


// Los componentes siempre se escriben la primera letra en mayusculas
// En React se usa mucho camelCase


function App() {
  return (
    <>
      <Examples/>
      <Flexwrapper>
        <Button text="Botón A" color="blue"/>
        <Button text="Botón B" color="indigo"/>
        <Button text="Ultimo" color="yellow"/>
        <ButtonChild color="red">
          <h1>Botón hijo</h1>
        </ButtonChild>
      </Flexwrapper>
    </>
  );
}


export default App;
