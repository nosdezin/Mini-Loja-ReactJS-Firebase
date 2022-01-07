import styles from './Buscar.module.css'
import SearchInput from "./SearchInput.js";

export default function Buscar() {
  return (
    <div className={styles.busca_container}>
      <h1>Buscar</h1>

      <SearchInput/>
    </div>
  );
}
