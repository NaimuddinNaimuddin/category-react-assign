import { Link } from "react-router-dom"
import './Header.css'

function Header() {
    return (
        <div className="head-card">
            <Link className="links" to='/'> HOME </Link>
            <Link className="links" to='/list'> LIST </Link>
        </div>
    )
}

export default Header