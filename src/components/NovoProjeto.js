import styles from "./NovoProjeto.module.css";
import Input from "./Input";
import Select from "./Select";
import { useState } from "react";
import { db } from "../database/firebase-config.js";
import { addDoc,collection } from "firebase/firestore";

export default function NovoProjeto() {
  const [name, setname] = useState("");
  const [preco, setPreco] = useState(0);
  const [type, setTipo] = useState("");
  const usersColletionRef = collection(db, "produtos");

  const produto = {
    nome: name,
    preço: preco,
    tipo: type,
    img: "https://via.placeholder.com/80",
  };

  const criarProduto = async () => {
    await addDoc(usersColletionRef, produto);
  };

  function handleChangeNome(e) {
    const valor = e.target.value;
    setname(valor);
  }

  function handleChangePreco(e) {
    const prec = e.target.value;
    setPreco(prec);
  }

  function handleChangeTipo(e) {
    const type = e.target.value;
    setTipo(type);
  }

  function click() {
    if (type === "" || name === "" || preco === 0 || preco < 0) {
      alert("Refaça o Formulario, você colocou alguma resposta invalida");
    } else {
      
      // alert("Deu certo")
      criarProduto()

      
    }
  }

  return (
    <div className={styles.project_container}>
      <div className={styles.form}>
        <h1>Criar Projeto</h1>
        <Input
          type="text"
          placeholder="Digite o nome do Produto"
          handleChange={handleChangeNome}
        />
        <Input
          type="number"
          placeholder="Digite o preço do Produto"
          handleChange={handleChangePreco}
        />
        <Select handleChange={handleChangeTipo} />
        <button type="button" onClick={click}>
          Criar!
        </button>
      </div>
    </div>
  );
}
