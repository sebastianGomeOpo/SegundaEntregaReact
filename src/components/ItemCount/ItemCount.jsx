import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus,faMinus } from '@fortawesome/free-solid-svg-icons'
import Stack from 'react-bootstrap/Stack';


function ItemCount(props){
    const {stock=50,initial=1,agregar}=props;
    // Creamos un estado usando useState donde asigno a count el valor de 1--initial
    const [count,setCount]= useState(initial);
    // funcion de validación para que no supere el stock y agregue item
    const agregaItem =()=> count <stock && setCount(count+1);

    // cuando se quita un elemento debo validar no continuar si tengo 0 elementos
    const quitarItem=()=> count >0 && setCount(count-1);

    return(
        <>
            <Stack gap={2} >
                <ButtonGroup size='lg'>
                    <Button
                    onClick={quitarItem}
                    disabled={count<=0}
                    >
                        <FontAwesomeIcon icon={faMinus} />
                    </Button>
                    <Button>{count}</Button>
                    <Button
                    variant='primary'
                    onClick={agregaItem}
                    disabled={count>=stock}
                    >
                        <FontAwesomeIcon icon={faPlus} />
                    </Button>
                </ButtonGroup>
                <Button variant="outline-dark" 
                onClick={()=>agregar(count)}
                disabled={count > stock || count <= 0}>
                    Comprar
                </Button>
            </Stack>
            
        </>
    );
};


export default ItemCount