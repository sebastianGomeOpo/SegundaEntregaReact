import logo from '../logo.svg';


let styleHeader = {
    backgroundColor:"black",
    marginTop:"200px",
    border:"solid 3px red",
};

const greeting ="Bienvenidos a mi Ecomerce!";
const mostrarCurso=()=>"Comision 43580- React JS";

function Examples() {
    return (
        <div className="App">
            {/* ejemplo comentario en JSX */}
            <header style={styleHeader} className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p style={{color:"pink"}}>
                    {mostrarCurso()}
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {greeting +".Otro String"}
                    <br></br>
                    {"salto de linea"}
                    <br/>
                    {20+30}
                </a>
                {/* <button>Hola Mundo</button> */}

            </header>
        </div>
    );
};

export default Examples;