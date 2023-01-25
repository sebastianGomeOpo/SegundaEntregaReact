import React from 'react'
import Button from 'react-bootstrap/Button'


export function SendButton(props) {

    const handleClick = () => {
        console.log("...");
        props.onTouch();
    }
    return (
    <Button 
    variant="outline-dark" 
    onClick={handleClick}>
    Comprar
    </Button>
    )
}

