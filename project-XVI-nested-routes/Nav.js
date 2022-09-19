import {NavLink} from "react-router-dom";

export default function Nav() {
    return <nav>
        <ul>
            <li>
                <NavLink activeClassName="nav-active" to="/" exact>Home</NavLink>
            </li>
            <li>
                <NavLink activeClassName="nav-active" to="/about" exact>About</NavLink>
            </li>
            <li>
                <NavLink activeClassName="nav-active" to="/products">Products</NavLink>
            </li>
        </ul>
    </nav>
}
