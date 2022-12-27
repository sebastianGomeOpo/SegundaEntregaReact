import './NavBar.css';
import { CartWidget } from '../CartWidget/CartWidget';
export function NavBar(props) {
    const {logo} = props;
    return (
        <nav className='navbar'>
            <img src={logo} alt="logo"></img>
            <ul>
                <li><button>Home</button></li>
                <li><button>Lanzamientos</button></li>
                <li><button>Diseñadores</button></li>
                <li><button>Ofertas</button></li>
                <li><CartWidget/></li>
            </ul>
        </nav>

    );
}
