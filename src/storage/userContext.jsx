import {createContext} from 'react';


export const userContext = createContext({user:"anonimo"});

// 5 Crear provider personalizado

export function UserContextProvider(props){
    return(
        // Renderizamos el context.Provider y los chiuldren con props
        <>
            <userContext.Provider value = {{user:"Tu vieja"}}>
            {/* Los renderizamos los children para que todos los children tengan acceso al value de nuestro proveedor */}
                {props.children}
            </userContext.Provider>


        </>
    )  }