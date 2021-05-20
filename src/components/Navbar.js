import {useState} from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {

  const [clicou, setClicou]=useState(false);

  const handleClick = ()=>{ setClicou(!clicou)}
    return ( 
      <header>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">VorteX</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#menu" onClick={handleClick}>
        {/* <span className="navbar-toggler-icon"></span> */}
        <i className={clicou ? 'fa fa-times': 'fa fa-bars'} ></i>
        </button>

        <div className="collapse navbar-collapse" id="menu">
        <ul className="navbar-nav mr-auto">
        <li className="nav-item">
        <Link className="nav-link" to="/calculador">Simular</Link>
        </li>
        <li className="nav-item dropdown">
        <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Produtos
        </Link>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
        <Link className="dropdown-item" to="/planos/1">FaleMais30</Link>
        <Link className="dropdown-item" to="/planos/2">FaleMais60</Link>
        <Link className="dropdown-item" to="/planos/3">FaleMais120</Link>
        </div>
        </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2" type="search" placeholder="Procurar" aria-label="Search"/>
        <button className="btn btn-warning my-2 my-sm-0" type="submit">Entrar</button>
        </form>
        </div>
        </nav>
        </header>
     );
}
 
export default Navbar;