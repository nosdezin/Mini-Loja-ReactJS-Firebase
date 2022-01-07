import styles from './Navbar.module.css'
import {Link} from 'react-router-dom'

export default function Navbar(){
    return (   
        <nav className={styles.navbar_container}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Buscar">Buscar</Link>
            </li>
            

            
            <li>
              <Link to="/NovoProjeto">Novo Projeto</Link>
            </li>
            <li>
              <Link to="/Contato">Contato</Link>
            </li>
          </ul>
      </nav>
    )
}