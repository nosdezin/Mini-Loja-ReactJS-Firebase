import { useState, useEffect } from "react";
import ProdutoCard from "./ProdutoCard.js";
import styles from "./SearchInput.module.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../database/firebase-config.js";

export default function SearchInput() {
  const [itens, setItens] = useState([]);
  const [NI, setNI] = useState([]);
  const usersColletionRef = collection(db, "produtos");

  useEffect(() => {
    const getItens = async () => {
      const data = await getDocs(usersColletionRef);
      setItens(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getItens();
  }, []);

  function BChap() {
    function chapeuF(obj) {
      return obj.tipo === "chapeu";
    }

    const NovosItens = itens.filter(chapeuF);
    setNI(NovosItens);
  }

  function BBlusa() {
    function BlusaF(obj) {
      return obj.tipo === "Blusa";
    }

    const NovosItens = itens.filter(BlusaF);
    setNI(NovosItens);
  }

  function BCamisa() {
    function CamisaF(obj) {
      return obj.tipo === "Camisa";
    }

    const NovosItens = itens.filter(CamisaF);
    setNI(NovosItens);
  }

  function BClear() {
    const NovosItens = [];
    setNI(NovosItens);
  }

  return (
    <div className={styles.pesquisa_container}>
      <div className={styles.button_container}>
        <button type="button" onClick={BChap}>
          Chapeu
        </button>
        <button type="button" onClick={BBlusa}>
          Moletom
        </button>
        <button type="button" onClick={BCamisa}>
          Camisa
        </button>
        {/* <button type="button">Tenis</button> */}
        <button type="button" onClick={BClear}>
          Limpar
        </button>
      </div>

      <div className={styles.itens}>
        {NI.map((item) => (
          <ProdutoCard
            nome={item.nome}
            valor={item.preço}
            img={item.img}
            key={item.id}
          />
        ))}
      </div>
    </div>
  );
}
