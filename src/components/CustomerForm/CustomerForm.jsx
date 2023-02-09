import React ,{useState}from 'react'
import InputForm from './InputForm';
import { Button } from 'react-bootstrap';
import { Flexwrapper } from '../FlexWrapper/FlexWrapper';

export default function CustomerForm(props) {
    const[userData,setUserData]=useState(
        {
            name:'',
            email:'',
            phone:''
        }
    )
    
    // fubcion para manejar el cambio de los inputs
    function onInputChange(evt){
        // Variables para cambio dinamico del State
        // target.name es el nombre del input
        const field = evt.target.name;
        // target.value es el valor del input
        const value = evt.target.value;

        // Cambio dinamico del State
        // newUserData es una copia del State
        const newUserData = {...userData};

        // Se asigna el valor del input al campo correspondiente
        newUserData[field] = value;

        //Se actualiza el State
        setUserData(newUserData);
    }

    // funcion para limpiar el formulario
    function clearForm(){
        setUserData({
            name:'',
            email:'',
            phone:''
        });
    }   


    // Funcion para manejar el envio del formulario
    function onSubmit(evt){
        // Se evita el comportamiento por defecto del formulario
        evt.preventDefault();

        // Se envia el formulario, esta funcion se pasa por props desde el componente padre
        // cuando llamamos a la funcion onSubmit, le pasamos el State como parametro
        props.onSubmit(userData);
        // Se envia el formulario
    }

    let arrayUserData= Object.keys(userData);

    return (
        <form onSubmit={onSubmit}>
          {arrayUserData.map((field) => (
            <InputForm
              name={field}
              value={userData[field]}
              onInputChange={onInputChange}
              label={field}
            />
          ))}

            <Flexwrapper>
                <Button
                    disabled={
                    !(
                        userData.name !== "" &&
                        userData.phone !== "" &&
                        userData.email !== ""
                    )
                    }
                    type="submit"
                >
                    Crear orden
                </Button>
                <Button onClick={clearForm}>Limpiar Datos</Button>
            </Flexwrapper>
        </form>
      );
    }
