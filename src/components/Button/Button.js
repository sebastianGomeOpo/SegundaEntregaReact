import './button.css';

function Button(props){
    console.log(props);
    return <button className="btn" style={{backgroundColor:props.color}}>{props.text}</button>
}

export function ButtonChild(props){
    console.log(props);
    return <button className="btn" style={{backgroundColor:props.color}}>{props.children}</button>
}



export default Button
