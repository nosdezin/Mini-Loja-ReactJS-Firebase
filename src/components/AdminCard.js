import styles from "./AdminCard.module.css";
import { FaTrashAlt, FaPen, FaAlignJustify } from "react-icons/fa";
import Select from "./Select";
export default function AdminCard({
  texto,
  preço,
  tipo,
  funcCick,
  funcEdit,
  handleChangeName,
  handleChangePreço,
  handleChangeSelect,
}) {
  let clickBool = true;

  return (
    <div className={styles.card_container}>
      <div className={styles.border}>
        <h1>Nome: {texto}</h1>
        <p>Preço: {preço}</p>
        <p>Tipo: {tipo}</p>
        <button onClick={funcCick}>
          <FaTrashAlt /> Excluir
        </button>

        <fieldset className={styles.edit_container}>
          <input type="text" placeholder="Nome" onChange={handleChangeName} />
          <input
            type="number"
            placeholder="Preço"
            onChange={handleChangePreço}
          />
          <Select handleChange={handleChangeSelect} />
          <button onClick={funcEdit}>
            <FaPen />
            Editar
          </button>
        </fieldset>
      </div>
    </div>
  );
}
